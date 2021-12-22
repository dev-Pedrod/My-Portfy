package com.myportfy.repositories;

import com.myportfy.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameStartsWithIgnoreCase(String name);
    User findByEmail(String email);
}
