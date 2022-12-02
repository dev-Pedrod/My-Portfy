package com.myportfy.services;

import com.myportfy.domain.Email;
import com.myportfy.domain.User;
import com.myportfy.dto.email.EmailDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IEmailService {
    Email findById(Long id);
    Page<EmailDto> findAll(Pageable pageable);
    void sendPrivateEmail(Email object, User author);
    void sendAccountConfirmation(User user);
    void sendPasswordUpdateConfirmation(User user);
    void sendResetPassword(User user);
    void sendSystemEmail(Email email);
    void sendSystemEmailUserDisabled(Email email);
    void sendEmailReactivateUser(String email);
}
