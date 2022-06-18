package com.myportfy.services.serviceImpl;

import com.myportfy.domain.User;
import com.myportfy.domain.enums.Role;
import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.dto.UserPrincipal;
import com.myportfy.repositories.PostRepository;
import com.myportfy.repositories.UserRepository;
import com.myportfy.services.IImageService;
import com.myportfy.services.IS3Service;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import static com.myportfy.domain.enums.Role.ADMIN;
import static java.time.LocalDateTime.now;
import static org.springframework.transaction.annotation.Propagation.REQUIRED;

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
    @Autowired
    private IImageService imageService;

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
    @Transactional(propagation = REQUIRED)
    public void create(User object) {
        object.setId(null);
        object.setPassword(bCryptPasswordEncoder.encode(object.getPassword()));
        object.setCreatedAt(now());
        userRepository.saveAndFlush(object);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void update(User object) {
        UserPrincipal user = currentUserLoggedIn();
        if (!user.hasRole(ADMIN) && !object.getId().equals(user.getId())) {
            throw new AuthorizationException("Access denied");
        }
        User updateObject = findById(object.getId());
        updateObject.setId(user.getId());
        Set<Role> role = updateObject.getRoles();
        LocalDateTime createAt = updateObject.getCreatedAt();

        if(object.getEmail() != null){
            object.setIsEmailEnabled(object.getEmail().equalsIgnoreCase(updateObject.getEmail()));
        } else {
            object.setIsEmailEnabled(updateObject.getIsEmailEnabled());
        }

        FillNullProperty.copyNonNullProperties(object, updateObject);

        updateObject.setCreatedAt(createAt);
        updateObject.setUpdatedAt(now());
        updateObject.setRoles(role);
        userRepository.save(updateObject);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void delete(Long id) {
        UserPrincipal userPrincipal = currentUserLoggedIn();
        if(!userPrincipal.hasRole(ADMIN) && !id.equals(userPrincipal.getId())){
            throw new AuthorizationException("Access denied");
        }
        User user = findById(id);
        postRepository.deleteAll(user.getPosts());
        user.getPosts().clear();
        user.setDisabledAt(now());
        userRepository.saveAndFlush(user);
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
    @Transactional(propagation = REQUIRED)
    public void updatePassword(PasswordUpdateDto passwordUpdate) {
        User user = findById(currentUserLoggedIn().getId());
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        user.setUpdatedAt(now());
        userRepository.saveAndFlush(user);
    }

    @Override
    public void enableUser(Long id) {
        userRepository.enableEmail(id);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void resetPassword(PasswordUpdateDto passwordUpdate, User user) {
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        if (!user.getIsEmailEnabled()) {
            enableUser(user.getId());
        }
        user.setUpdatedAt(now());
        userRepository.saveAndFlush(user);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public URI uploadProfilePicture(MultipartFile multipartFile) {
        User user = findById(currentUserLoggedIn().getId());
        BufferedImage jpgImage = imageService.getJpgImageFromFile(multipartFile);
        jpgImage = imageService.cropSquare(jpgImage);
        jpgImage = imageService.resize(jpgImage, 612);

        URI uri = s3Service.uploadFile(
                imageService.getInputStream(jpgImage, "jpg"),
                "USER-" + UUID.randomUUID(),
                "image");

        user.setProfilePictureURL(uri.toString());
        userRepository.saveAndFlush(user);
        return uri;
    }

    @Override
    public void reactivateUser(String email) {
        userRepository.reactivateUser(email);
    }

    // UserDetailsService
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username);
        if(user == null){
            throw new UsernameNotFoundException("Not found username: " + username);
        }
        return new UserPrincipal(user.getId(), user.getUsername(), user.getPassword(), user.getRoles());
    }
}
