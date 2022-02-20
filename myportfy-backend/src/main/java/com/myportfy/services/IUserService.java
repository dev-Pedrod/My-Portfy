package com.myportfy.services;

import com.myportfy.domain.User;
import com.myportfy.dto.user.PasswordUpdateDto;
import com.myportfy.security.UserPrincipal;

import java.util.List;

public interface IUserService extends HelperService<User>{
    List<User> findByName(String name);
    User findByEmail(String email);
    List<User> findByUsername(String username);
    UserPrincipal currentUserLoggedIn();
    void isCurrentUserLoggedIn(Long id);
    void updatePassword(PasswordUpdateDto passwordUpdate);
    void enableUser(Long id);
    void resetPassword(PasswordUpdateDto passwordUpdate, User user);
}
