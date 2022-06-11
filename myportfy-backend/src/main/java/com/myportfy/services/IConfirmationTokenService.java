package com.myportfy.services;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.dto.PasswordUpdateDto;

public interface IConfirmationTokenService extends IGenericService<ConfirmationToken> {
    ConfirmationToken findByToken(String token);
    void validateAndConfirmAccount(String token);
    void validateAndConfirmUpdatePassword(String token, PasswordUpdateDto password);
    void validateAndConfirmResetPassword(String token, PasswordUpdateDto password);
    void validateAndReactivateUser(String token);

}
