package com.myportfy.services;

import com.myportfy.domain.Email;
import com.myportfy.domain.User;

public interface IEmailService extends IGenericService<Email> {
    void sendPrivateEmail(Email object, User author);
    void sendAccountConfirmation(User user);
    void sendPasswordUpdateConfirmation(User user);
    void sendResetPassword(User user);
    void sendSystemEmail(Email email);
    void sendSystemEmailUserDisabled(Email email);
    void sendEmailReactivateUser(String email);
}
