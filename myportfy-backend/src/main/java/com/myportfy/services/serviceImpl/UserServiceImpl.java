package com.myportfy.services.serviceImpl;

import com.myportfy.domain.User;
import com.myportfy.domain.enums.Role;
import com.myportfy.dto.PasswordDto;
import com.myportfy.dto.UserPrincipal;
import com.myportfy.repositories.PostRepository;
import com.myportfy.repositories.UserRepository;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IImageService;
import com.myportfy.services.IS3Service;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.image.BufferedImage;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.myportfy.domain.enums.Role.ADMIN;
import static java.time.LocalDateTime.now;
import static org.springframework.transaction.annotation.Propagation.REQUIRED;

@Service
@Slf4j
public class UserServiceImpl implements IUserService {

    private final String USER_NOT_FOUND_MESSAGE = "Não encontrei nenhum usuário.. 😫";
    private final String AUTHORIZARTION_EXCEPTION_MESSAGE = "Acesso não autorizado.";

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
    @Autowired @Lazy
    private IEmailService emailService;

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {
        log.info("Fetching all users");
        return userRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public User findById(Long id) {
        Optional<User> object = userRepository.findById(id);
        log.info("Fetching user by id: {}", id);
        return object.orElseThrow(() -> {
            log.error("User with id: {} not found", id);
            return new ObjectNotFoundException(USER_NOT_FOUND_MESSAGE);
        });
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void create(User object) {
        object.setId(null);
        object.setPassword(bCryptPasswordEncoder.encode(object.getPassword()));
        object.setCreatedAt(now());
        userRepository.saveAndFlush(object);
        log.info("New user created: {}", object.getUsername());
        emailService.sendAccountConfirmation(object);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void update(User object) {
        UserPrincipal user = currentUserLoggedIn();
        if (!user.hasRole(ADMIN) && !object.getId().equals(user.getId())) {
            log.error("Authorization exception for user {} on update user {}", user.getUsername(), object.getUsername());
            throw new AuthorizationException(AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
        log.info("Updating user, id: {}", object.getId());
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
        log.info("User updated, id: {}", object.getId());
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void delete(Long id) {
        UserPrincipal userPrincipal = currentUserLoggedIn();
        if(!userPrincipal.hasRole(ADMIN) && !id.equals(userPrincipal.getId())){
            log.error("Authorization exception for user {} on delete user by id {}", userPrincipal.getUsername(), id);
            throw new AuthorizationException(AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
        User user = findById(id);
        postRepository.deleteAll(user.getPosts());
        user.getPosts().clear();
        user.setDisabledAt(now());
        log.info("Deactivating user, id: {}", id);
        userRepository.saveAndFlush(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByName(String name) {
        log.info("Fetching users by name: {}", name);
        List<User> users = userRepository.findByFullNameStartsWithIgnoreCase(name);
        if(users.isEmpty()){
            log.error("User with name: {} not found", name);
            throw new ObjectNotFoundException(USER_NOT_FOUND_MESSAGE);
        }
        return users;
    }

    @Override
    @Transactional(readOnly = true)
    public User findByEmailIgnoreCase(String email) {
        log.info("Fetching users by email: {}", email);
        User user = userRepository.findByEmailIgnoreCase(email);
        if(user == null){
            log.error("User with email: {} not found", email);
            throw new ObjectNotFoundException("Não encontrei nenhum usuário com este e-mail 😥");
        }
        return user;
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByUsername(String username) {
        log.info("Fetching users by username: {}", username);
        List<User> users = userRepository.findByUsernameStartsWithIgnoreCase(username);
        if(users.isEmpty()){
            log.error("User with username: {} not found", username);
            throw new ObjectNotFoundException("Não encontrei nenhum usuário com este nome de usuário 😥");
        }
        return users;
    }

    @Override
    public UserPrincipal currentUserLoggedIn() {
        try { return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); }
        catch (Exception e) {
            log.error("Exception on get current user logged in", e);
            return null;
        }
    }

    @Override
    public void isCurrentUserLoggedIn(Long id) {
        if (this.currentUserLoggedIn() == null){
            throw new AuthorizationException(AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void updatePassword(PasswordDto passwordUpdate) {
        User user = findById(currentUserLoggedIn().getId());
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        user.setUpdatedAt(now());
        log.info("Updating user password for user: {}", user.getUsername());
        userRepository.saveAndFlush(user);
    }

    @Override
    public void enableUser(Long id) {
        log.info("Enable email for user with id: {}", id);
        userRepository.enableEmail(id);
    }

    @Override
    @Transactional(propagation = REQUIRED)
    public void resetPassword(PasswordDto passwordUpdate, User user) {
        user.setPassword(bCryptPasswordEncoder.encode(passwordUpdate.getPassword()));
        if (!user.getIsEmailEnabled()) {
            enableUser(user.getId());
        }
        user.setUpdatedAt(now());
        log.info("Reset password for user: {}", user.getUsername());
        userRepository.saveAndFlush(user);
    }

    @Override
    @Async
    @Transactional(propagation = REQUIRED)
    public void uploadProfilePicture(BufferedImage jpgImage, String fileName, User user) {
        URI uri = s3Service.uploadFile(
                imageService.getInputStream(jpgImage, "JPG"),
                fileName,
                "image");
        if (user.getProfilePictureURL() != null) {
            deleteProfilePicture(user);
        }
        user.setProfilePictureURL(uri.toString());
        log.info("Profile picture added to user: {}", user.getUsername());
        userRepository.saveAndFlush(user);
    }

    @Override
    @Transactional
    public void deleteProfilePicture(User user) {
        String urlPicture = user.getProfilePictureURL();
        if(urlPicture == null) {
            log.error("User profile picture not found, user: {}", user.getUsername());
            throw new ObjectNotFoundException("Você não possui foto de perfil.");
        }
        String key = urlPicture.substring(urlPicture.length() - 41);
        s3Service.deletePicture(key);
        user.setProfilePictureURL(null);
        log.info("Removing the user's profile picture: {}", user.getUsername());
        userRepository.saveAndFlush(user);
    }

    @Override
    public void reactivateUser(String email) {
        log.info("Reactivate user by email: {}", email);
        userRepository.reactivateUser(email);
    }

    // UserDetailsService
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username);
        if(user == null){
            log.error("Username not found: {}", username);
            throw new UsernameNotFoundException("Username não encontrado: " + username);
        }
        return new UserPrincipal(user.getId(), user.getUsername(), user.getPassword(), user.getRoles());
    }
}
