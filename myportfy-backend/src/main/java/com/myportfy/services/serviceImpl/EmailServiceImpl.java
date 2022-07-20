package com.myportfy.services.serviceImpl;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.domain.Email;
import com.myportfy.domain.User;
import com.myportfy.repositories.EmailRepository;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.EmailException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.internet.MimeMessage;
import java.util.Optional;
import java.util.UUID;

import static com.myportfy.domain.enums.Role.ADMIN;
import static com.myportfy.domain.enums.StatusEmail.ERROR;
import static com.myportfy.domain.enums.StatusEmail.SENT;
import static com.myportfy.utils.emailTemplates.EmailHtml.*;
import static java.time.LocalDateTime.now;

@Service
@Slf4j
public class EmailServiceImpl implements IEmailService {

    private final String EMAIL_NOT_FOUND_MESSAGE = "Nenhum email encontrado.";
    private final String AUTHORIZATION_EXCEPTION_MESSAGE = "Você precisa confirmar sua conta para enviar emails!";
    private final String EMAIL_EXCEPTION_MESSAGE = "Houve um erro ao tentar enviar este email... 😥";

    @Autowired
    private EmailRepository emailRepository;
    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private IUserService userService;
    @Autowired
    private IConfirmationTokenService tokenService;

    @Value("${BaseURL}/users/confirm-account?token=")
    private String URL_CONFIRM_ACCOUNT;
    @Value("${BaseURL}/users/reactivate-user?token=")
    private String URL_REACTIVATE_ACCOUNT;
    @Value("${FrontBaseURL}/reset-password/")
    private String URL_RESET_PASSWORD;

    @Override
    @Transactional(readOnly = true)
    public Page<Email> findAll(Pageable pageable) {
        log.info("Fetching all emails");
        return emailRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Email findById(Long id) {
        Optional<Email> email = emailRepository.findById(id);
        log.info("Fetching email by id: {}",id);
        return email.orElseThrow(() -> {
            log.error("Email with id {} not found.", id);
            return new ObjectNotFoundException(EMAIL_NOT_FOUND_MESSAGE);
        });
    }

    @Override
    public void create(Email object) {
    }

    @Override
    public void update(Email object) {
    }

    @Override
    public void delete(Long id) {
    }

    @Transactional
    @Override
    @Async
    public void sendPrivateEmail(Email object, User author) {
        object.setCreatedAt(now());

        if(!author.getIsEmailEnabled()) {
            log.error("Authorization exception for user {} on send private email", author.getUsername());
            throw new AuthorizationException(AUTHORIZATION_EXCEPTION_MESSAGE);
        }
        userService.findByEmailIgnoreCase(object.getEmailTo());

        try {
            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper mail = new MimeMessageHelper(mimeMessage, "utf-8");

            mail.setFrom(object.getEmailFrom());
            mail.setTo(object.getEmailTo());
            mail.setSubject(object.getSubject());
            mail.setText("<h1>Você recebeu um email de: "+object.getEmailFrom()+"</h1>" + object.getContent(),true);

            log.info("Sending email from {} to: {}", object.getEmailFrom(), object.getEmailTo());
            emailSender.send(mimeMessage);
            object.setStatusEmail(SENT);

        } catch (Exception e) {
            object.setStatusEmail(ERROR);
            log.error("Failed to send email", e);
            throw new EmailException(EMAIL_EXCEPTION_MESSAGE);
        } finally {
            if (userService.findByEmailIgnoreCase(object.getEmailFrom()).getRoles().contains(ADMIN)) {
                emailRepository.save(object);
            }
        }
    }

    @Override
    @Async
    public void sendAccountConfirmation(User user) {
        String token = UUID.randomUUID().toString();
        tokenService.create(new ConfirmationToken(token, now().plusMinutes(20), user));
        log.info("Sending confirmation email to: {}", user.getEmail());
        sendSystemEmail(new Email(
                user.getEmail(),
                "Confirmação de conta",
                buildEmailConfirmAccount(user.getUsername(),URL_CONFIRM_ACCOUNT + token )));
    }

    @Override
    public void sendPasswordUpdateConfirmation(User user) {
        String token = UUID.randomUUID().toString();
        log.info("Enviando email de confirmação de atualização de senha para: {}", user.getEmail());
        tokenService.create(new ConfirmationToken(token, now().plusMinutes(15), user));

        sendSystemEmail(new Email(
                user.getEmail(),
                "Confirme sua atualização de senha",
                buildEmailUpdatePassword(user.getUsername(), token)));
    }

    @Override
    @Async
    public void sendResetPassword(User user) {
        String token = UUID.randomUUID().toString();
        tokenService.create(new ConfirmationToken(token, now().plusMinutes(10), user));
        log.info("Enviando email de confirmação de redefinição de senha para: {}", user.getEmail());

        sendSystemEmail(new Email(
                user.getEmail(),
                "Recuperar conta",
                buildEmailResetPassword(user.getUsername(), URL_RESET_PASSWORD + token)));
    }

    @Override
    @Async
    public void sendSystemEmail(Email email) {
        userService.findByEmailIgnoreCase(email.getEmailTo());
        try {
            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper mail = new MimeMessageHelper(mimeMessage, "utf-8");
            mail.setTo(email.getEmailTo());
            mail.setSubject(email.getSubject());
            mail.setText(email.getContent(), true);
            emailSender.send(mimeMessage);
        } catch (Exception e) {
            log.error("Failed to send system email", e);
            throw new EmailException(EMAIL_EXCEPTION_MESSAGE);
        }
    }

    @Override
    @Async
    public void sendSystemEmailUserDisabled(Email email) {
        try {
            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper mail = new MimeMessageHelper(mimeMessage, "utf-8");
            mail.setTo(email.getEmailTo());
            mail.setSubject(email.getSubject());
            mail.setText(email.getContent(), true);
            emailSender.send(mimeMessage);
            log.info("Sending email to deactivated user: {}", email.getEmailTo());
        } catch (Exception e) {
            log.error("Failed to send system email", e);
            throw new EmailException("Falha ao enviar email");
        }
    }

    @Override
    @Async
    public void sendEmailReactivateUser(String email) {
        String token = UUID.randomUUID().toString();
        tokenService.create(new ConfirmationToken(token, now().plusMinutes(30), email));
        log.info("Sending account reactivation email to: {}", email);
        sendSystemEmailUserDisabled(new Email(
                email,
                "Reative sua conta",
                buildEmailReactivateUser(URL_REACTIVATE_ACCOUNT + token)));
    }
}
