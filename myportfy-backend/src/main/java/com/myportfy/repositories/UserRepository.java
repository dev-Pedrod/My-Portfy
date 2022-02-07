package com.myportfy.repositories;

import com.myportfy.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFullNameStartsWithIgnoreCase(String firstName);
    User findByEmail(String email);
    User findByUsernameIgnoreCase(String username);
    List<User> findByUsernameStartsWithIgnoreCase(String username);
    @Transactional
    @Modifying
    @Query("UPDATE _user x SET x.enabled = TRUE WHERE x.id = ?1")
    void enableUser(Long id);
}
