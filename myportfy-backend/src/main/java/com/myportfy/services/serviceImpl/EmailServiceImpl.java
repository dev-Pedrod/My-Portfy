package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Email;
import com.myportfy.repositories.EmailRepository;
import com.myportfy.services.IEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import static com.myportfy.domain.enums.StatusEmail.ERROR;
import static com.myportfy.domain.enums.StatusEmail.SENT;
import static java.time.LocalDateTime.now;

@Service
public class EmailServiceImpl implements IEmailService {

    @Autowired
    private EmailRepository emailRepository;
    @Autowired
    private JavaMailSender emailSender;

    @Override
    public Page<Email> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Email findById(Long id) {
        return null;
    }

    @Override
    public void create(Email object) {
        object.setCreatedAt(now());
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setFrom(object.getEmailFrom());
            mail.setTo(object.getEmailTo());
            mail.setSubject(object.getSubject());
            mail.setText(object.getContent());
            emailSender.send(mail);
            object.setStatusEmail(SENT);
        } catch (MailException e) {
            object.setStatusEmail(ERROR);
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
