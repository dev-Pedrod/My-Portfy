package com.myportfy.services;

import com.myportfy.domain.User;

import java.util.List;

public interface IUserService extends HelperService<User>{
    List<User> findByName(String name);
    User findByEmail(String email);
    List<User> findByUsername(String username);
}
