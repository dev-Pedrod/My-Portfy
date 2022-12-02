package com.myportfy.services;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.PasswordDto;

public interface IConfirmationTokenService extends IGenericService<ConfirmationToken, DtoDomain> {
    ConfirmationToken findByToken(String token);
    void validateAndConfirmAccount(String token);
    void validateAndConfirmUpdatePassword(String token, PasswordDto password);
    void validateAndConfirmResetPassword(String token, PasswordDto password);
    void validateAndReactivateUser(String token);
    boolean isValidToken(ConfirmationToken token);
}
