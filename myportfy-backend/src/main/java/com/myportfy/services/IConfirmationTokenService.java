package com.myportfy.services;

import com.myportfy.domain.ConfirmationToken;

public interface IConfirmationTokenService extends HelperService<ConfirmationToken>{
    ConfirmationToken findByToken(String token);
    void validateAndConfirmAccount(String token);
}
