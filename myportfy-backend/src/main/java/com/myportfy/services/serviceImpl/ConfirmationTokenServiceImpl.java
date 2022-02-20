package com.myportfy.services.serviceImpl;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.domain.User;
import com.myportfy.dto.user.PasswordUpdateDto;
import com.myportfy.repositories.ConfirmationTokenRepository;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
public class ConfirmationTokenServiceImpl implements IConfirmationTokenService {

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    private IUserService userService;

    @Override
    @Transactional(readOnly = true)
    public Page<ConfirmationToken> findAll(Pageable pageable) {
        return confirmationTokenRepository.findAll(pageable);
    }

    @Override
    public ConfirmationToken findById(Long id) {
        return null;
    }

    @Override
    @Transactional
    public void create(ConfirmationToken object) {
        object.setCreatedAt(now());
        confirmationTokenRepository.saveAndFlush(object);
    }

    @Override
    @Transactional
    public void update(ConfirmationToken object) {
        object.setUpdatedAt(now());
        confirmationTokenRepository.saveAndFlush(object);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    @Transactional(readOnly = true)
    public ConfirmationToken findByToken(String token) {
        Optional<ConfirmationToken> confirmationToken = confirmationTokenRepository.findByToken(token);
        return confirmationToken.orElseThrow(() -> new ObjectNotFoundException("Token not found! Token: " + token));
    }

    @Override
    public void validateAndConfirmAccount(String token) {
        ConfirmationToken cToken = findByToken(token);
        if(cToken.getConfirmedAt() != null) {
            throw new IllegalArgumentException("Email already confirmed");
        }
        if (cToken.getExpiresAt().isBefore(now())) {
            throw new IllegalArgumentException("Token expired");
        }
        cToken.setConfirmedAt(now());
        update(cToken);
        userService.enableUser(cToken.getUser().getId());
    }

    @Override
    public void validateAndConfirmUpdatePassword(String token, PasswordUpdateDto password) {
        ConfirmationToken cToken = findByToken(token);
        if (cToken.getExpiresAt().isBefore(now()) || cToken.getConfirmedAt() != null) {
            throw new IllegalArgumentException("Token expired or already used");
        }
        cToken.setConfirmedAt(now());
        update(cToken);
        userService.updatePassword(password);
    }

    @Override
    public void validateAndConfirmResetPassword(String token, PasswordUpdateDto password) {
        ConfirmationToken cToken = findByToken(token);
        if (cToken.getExpiresAt().isBefore(now()) || cToken.getConfirmedAt() != null) {
            throw new IllegalArgumentException("Token expired or already used");
        }
        cToken.setConfirmedAt(now());
        userService.resetPassword(password, userService.findByEmail(cToken.getUser().getEmail()));
    }
}
