package com.myportfy.services;

import com.myportfy.domain.User;
import com.myportfy.dto.PasswordDto;
import com.myportfy.dto.UserPrincipal;
import com.myportfy.dto.user.UserGetDto;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.awt.image.BufferedImage;
import java.util.List;

public interface IUserService extends IGenericService<User, UserGetDto>, UserDetailsService {
    List<User> findByName(String name);
    User findByEmailIgnoreCase(String email);
    List<User> findByUsername(String username);
    UserPrincipal currentUserLoggedIn();
    void isCurrentUserLoggedIn(Long id);
    void updatePassword(PasswordDto passwordUpdate);
    void enableUser(Long id);
    void resetPassword(PasswordDto passwordUpdate, User user);
    void uploadProfilePicture(BufferedImage jpgImage, String fileName, User user);
    void deleteProfilePicture(User user);
    void reactivateUser(String email);
}
