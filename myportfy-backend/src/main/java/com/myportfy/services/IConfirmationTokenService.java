package com.myportfy.services;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.domain.User;
import com.myportfy.dto.user.PasswordUpdateDto;

public interface IConfirmationTokenService extends HelperService<ConfirmationToken>{
    ConfirmationToken findByToken(String token);
    void validateAndConfirmAccount(String token);
    void validateAndConfirmUpdatePassword(String token, User user, PasswordUpdateDto password);
}
