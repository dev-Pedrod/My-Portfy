package com.myportfy.services.serviceImpl;

import com.myportfy.domain.ConfirmationToken;
import com.myportfy.domain.Email;
import com.myportfy.domain.User;
import com.myportfy.repositories.EmailRepository;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Optional;
import java.util.UUID;

import static com.myportfy.domain.enums.StatusEmail.ERROR;
import static com.myportfy.domain.enums.StatusEmail.SENT;
import static java.time.LocalDateTime.now;

@Service
public class EmailServiceImpl implements IEmailService {

    @Autowired
    private EmailRepository emailRepository;
    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private IUserService userService;
    @Autowired
    private IConfirmationTokenService tokenService;

    @Override
    @Transactional(readOnly = true)
    public Page<Email> findAll(Pageable pageable) {
        return emailRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Email findById(Long id) {
        Optional<Email> email = emailRepository.findById(id);
        return email.orElseThrow(() -> new ObjectNotFoundException("Email not found! ID: "+ id));
    }

    @Override
    @Transactional
    @Async
    public void create(Email object) {
        object.setCreatedAt(now());
        userService.findByEmail(object.getEmailTo());
        try {
            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper mail = new MimeMessageHelper(mimeMessage, "utf-8");
            mail.setTo(object.getEmailTo());
            mail.setSubject(object.getSubject());
            mail.setText(object.getContent(), true);
            emailSender.send(mimeMessage);
            object.setStatusEmail(SENT);
        } catch (MailException | MessagingException e) {
            object.setStatusEmail(ERROR);
            throw new MailSendException("Failed to send email");
        } finally {
            emailRepository.save(object);
        }

    }

    @Override
    public void update(Email object) {
    }

    @Override
    public void delete(Long id) {
    }

    @Override
    public void sendAccountConfirmation(User user) {
        String token = UUID.randomUUID().toString();
        tokenService.create(new ConfirmationToken(token, now().plusMinutes(20), user));

        create(new Email(
                user.getEmail(),
                "Confirm your account",
                "Link expire in 20 minutes <br>" +
                        "http://localhost:8080/users/confirm-account?token="+ token));
    }
}
