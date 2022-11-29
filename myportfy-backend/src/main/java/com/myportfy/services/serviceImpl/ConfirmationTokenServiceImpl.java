package com.myportfy.services.serviceImpl;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.PasswordDto;
import com.myportfy.repositories.ConfirmationTokenRepository;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.ConfirmationTokenException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
@Slf4j
public class ConfirmationTokenServiceImpl implements IConfirmationTokenService {
    private final String TOKEN_NOT_FOUND_MESSAGE = "Este token não existe...";
    private final String TOKEN_EXCEPTION_MESSAGE = "Este token expirou ou já foi utilizado.";

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    private IUserService userService;

    @Override
    @Transactional(readOnly = true)
    public Page<DtoDomain> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<?> findAllGeneric(Pageable pageable) {
        log.info("Returning all confirmation tokens");
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
        log.info("New confirmation token created for user: {}", object.getUser().getUsername());
    }

    @Override
    public void create(ConfirmationToken object, Object arg) {

    }

    @Override
    @Transactional
    public ConfirmationToken update(ConfirmationToken object) {
        object.setUpdatedAt(now());
        log.info("Updated token: {}", object.getToken());
        return confirmationTokenRepository.saveAndFlush(object);
    }

    @Override
    public ConfirmationToken update(ConfirmationToken object, Object arg) {
        return null;
    }

    @Override
    public void delete(Long id) {
    }

    @Override
    @Transactional(readOnly = true)
    public ConfirmationToken findByToken(String token) {
        Optional<ConfirmationToken> confirmationToken = confirmationTokenRepository.findByToken(token);
        log.info("Fetching confirmation tokens by token: {}", token);
        return confirmationToken.orElseThrow(() -> {
            log.error("Token not found: {}", token);
            return new ObjectNotFoundException(TOKEN_NOT_FOUND_MESSAGE);
        });
    }

    @Override
    public void validateAndConfirmAccount(String token) {
        ConfirmationToken cToken = findByToken(token);
        if (isValidToken(cToken)) {
            cToken.setConfirmedAt(now());
            update(cToken);
            userService.enableUser(cToken.getUser().getId());
            log.info("Confirmed token and enabled user: {}", cToken.getUser().getUsername());
        }
    }

    @Override
    public void validateAndConfirmUpdatePassword(String token, PasswordDto password) {
        ConfirmationToken cToken = findByToken(token);
        if (isValidToken(cToken)) {
            cToken.setConfirmedAt(now());
            update(cToken);
            userService.updatePassword(password);
            log.info("Confirmed token and confirmed update password for user: {}", cToken.getUser().getUsername());
        }
    }

    @Override
    public void validateAndConfirmResetPassword(String token, PasswordDto password) {
        ConfirmationToken cToken = findByToken(token);
        if (isValidToken(cToken)) {
            cToken.setConfirmedAt(now());
            userService.resetPassword(password, userService.findByEmailIgnoreCase(cToken.getUser().getEmail()));
            log.info("Confirmed token and confirmed password reset for user: {}", cToken.getUser().getUsername());
        }
    }

    public void validateAndReactivateUser(String token) {
        ConfirmationToken cToken = findByToken(token);
        if (isValidToken(cToken)) {
            cToken.setConfirmedAt(now());
            update(cToken);
            userService.reactivateUser(cToken.getUserEmail());
            log.info("Confirmed token and reactivated user by email: {}", cToken.getUserEmail());
        }
    }

    @Override
    public boolean isValidToken(ConfirmationToken token){
        if (token.getExpiresAt().isBefore(now()) || token.getConfirmedAt() != null) {
            log.error("Expired or already used token: {}", token.getToken());
            throw new ConfirmationTokenException(TOKEN_EXCEPTION_MESSAGE);
        }
        return true;
    }
}
