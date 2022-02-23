package com.myportfy.services;

import com.myportfy.domain.Email;
import com.myportfy.domain.User;

public interface IEmailService extends HelperService<Email>{
    void sendAccountConfirmation(User user);
    void sendPasswordUpdateConfirmation(User user);
    void sendResetPassword(User user);
    void sendSystemEmail(Email email);
}
