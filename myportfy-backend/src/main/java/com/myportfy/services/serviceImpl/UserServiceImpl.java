package com.myportfy.services.serviceImpl;

import com.myportfy.domain.User;
import com.myportfy.domain.enums.Role;
import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.repositories.PostRepository;
import com.myportfy.repositories.UserRepository;
import com.myportfy.security.UserPrincipal;
import com.myportfy.services.IS3Service;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import com.myportfy.utils.validators.PasswordValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.myportfy.domain.enums.Role.ADMIN;
import static java.time.LocalDateTime.now;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private IS3Service s3Service;

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public User findById(Long id) {
        Optional<User> object = userRepository.findById(id);
        return object.orElseThrow(() -> new ObjectNotFoundException("User with id: "+id+" not found"));
    }

    @Override
    @Transactional
    public void create(User object) {
        object.setId(null);
        object.setPassword(bCryptPasswordEncoder.encode(object.getPassword()));
        object.setCreatedAt(now());
        userRepository.saveAndFlush(object);
    }

    @Override
    @Transactional
    public void update(User object) {
        UserPrincipal user = currentUserLoggedIn();
        if (!user.hasRole(ADMIN) && !object.getId().equals(user.getId())) {
            throw new AuthorizationException("Access denied");
        }
        User updateObject = findById(object.getId());
        updateObject.setId(user.getId());
        Set<Role> role = updateObject.getRoles();
        LocalDateTime createAt = updateObject.getCreatedAt();

        FillNullProperty.copyNonNullProperties(object, updateObject);

        updateObject.setCreatedAt(createAt);
        updateObject.setUpdatedAt(now());
        updateObject.setRoles(role);
        userRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        UserPrincipal userPrincipal = currentUserLoggedIn();
        if(!userPrincipal.hasRole(ADMIN) && !id.equals(userPrincipal.getId())){
            throw new AuthorizationException("Access denied");
        }
        User user = findById(id);
        postRepository.deleteAll(user.getPosts());
        user.getPosts().clear();
        user.setDeletedAt(now());
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByName(String name) {
        if(userRepository.findByFullNameStartsWithIgnoreCase(name).isEmpty())
            throw new ObjectNotFoundException("User with name: "+name+" not found");
        return userRepository.findByFullNameStartsWithIgnoreCase(name);
    }

    @Override
    @Transactional(readOnly = true)
    public User findByEmailIgnoreCase(String email) {
        if(userRepository.findByEmailIgnoreCase(email) == null)
            throw new ObjectNotFoundException("User with email: "+email+" not found");
        return userRepository.findByEmailIgnoreCase(email);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByUsername(String username) {
        if(userRepository.findByUsernameStartsWithIgnoreCase(username).isEmpty() ){
            throw new ObjectNotFoundException("User with usernmae: "+username+" not found");
        }
        return userRepository.findByUsernameStartsWithIgnoreCase(username);
    }

    @Override
    public UserPrincipal currentUserLoggedIn() {
        try { return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); }
        catch (Exception e) {
            return null;
        }
    }

    @Override
    public void isCurrentUserLoggedIn(Long id) {
        if (this.currentUserLoggedIn() == null){
            throw new AuthorizationException("Access denied");
        }
    }

    @Override
    @Transactional
    public void updatePassword(PasswordUpdateDto passwordUpdate) {
        User user = findById(currentUserLoggedIn().getId());
        PasswordValidator.validatePasswordUpdate(passwordUpdate);
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        user.setUpdatedAt(now());
        userRepository.saveAndFlush(user);
    }

    @Override
    @Transactional
    public void enableUser(Long id) {
        userRepository.enableUser(id);
    }

    @Override
    public void resetPassword(PasswordUpdateDto passwordUpdate, User user) {
        PasswordValidator.validatePasswordUpdate(passwordUpdate);
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        if (!user.getEnabled()) {
            enableUser(user.getId());
        }
        user.setUpdatedAt(now());
        userRepository.saveAndFlush(user);
    }

    @Override
    public URI uploadProfilePicture(MultipartFile multipartFile) {
        User user = findById(currentUserLoggedIn().getId());
        isCurrentUserLoggedIn(user.getId());
        URI uri = s3Service.uploadFile(multipartFile);
        user.setProfilePictureURL(uri.toString());
        userRepository.saveAndFlush(user);
        return uri;
    }
}
