package com.myportfy.services;

import com.myportfy.domain.User;
import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.security.UserPrincipal;

import java.util.List;

public interface IUserService extends IGenericService<User> {
    List<User> findByName(String name);
    User findByEmailIgnoreCase(String email);
    List<User> findByUsername(String username);
    UserPrincipal currentUserLoggedIn();
    void isCurrentUserLoggedIn(Long id);
    void updatePassword(PasswordUpdateDto passwordUpdate);
    void enableUser(Long id);
    void resetPassword(PasswordUpdateDto passwordUpdate, User user);
}
