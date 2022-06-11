package com.myportfy.services.serviceImpl;

import com.myportfy.domain.User;
import com.myportfy.repositories.UserRepository;
import com.myportfy.dto.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username);
        if(user == null){
            throw new UsernameNotFoundException("Not found username: " + username);
        }
        return new UserPrincipal(user.getId(), user.getUsername(), user.getPassword(), user.getRoles());
    }
}
