package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Email;
import com.myportfy.repositories.EmailRepository;
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
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    @Override
    public Page<Email> findAll(Pageable pageable) {
        return emailRepository.findAll(pageable);
    }

    @Override
    public Email findById(Long id) {
        Optional<Email> email = emailRepository.findById(id);
        return email.orElseThrow(() -> new ObjectNotFoundException("Email not found! ID: "+ id));
    }

    @Override
    public void create(Email object) {
        object.setCreatedAt(now());
        userService.findByEmail(object.getEmailTo());
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(object.getEmailTo());
            mail.setSubject(object.getSubject());
            mail.setText(object.getContent());
            emailSender.send(mail);
            object.setStatusEmail(SENT);
        } catch (MailException e) {
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
}