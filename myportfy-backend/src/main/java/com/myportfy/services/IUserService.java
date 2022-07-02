package com.myportfy.services;

import com.myportfy.domain.User;
import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.dto.UserPrincipal;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.util.List;

public interface IUserService extends IGenericService<User>, UserDetailsService {
    List<User> findByName(String name);
    User findByEmailIgnoreCase(String email);
    List<User> findByUsername(String username);
    UserPrincipal currentUserLoggedIn();
    void isCurrentUserLoggedIn(Long id);
    void updatePassword(PasswordUpdateDto passwordUpdate);
    void enableUser(Long id);
    void resetPassword(PasswordUpdateDto passwordUpdate, User user);
    void uploadProfilePicture(BufferedImage jpgImage, String fileName, User user);
    void deleteProfilePicture(User user);
    void reactivateUser(String email);
}
