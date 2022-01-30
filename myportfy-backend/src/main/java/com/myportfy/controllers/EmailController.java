package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.Email;
import com.myportfy.dto.email.EmailDto;
import com.myportfy.services.IEmailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/emails")
public class EmailController {

    @Autowired
    private IEmailService emailService;

    @PostMapping("/sending")
    public ResponseEntity<Response> sendingEmail(@Valid @RequestBody EmailDto emailDto){
        Email email = new Email();
        BeanUtils.copyProperties(emailDto, email);
        emailService.create(email);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(emailDto.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Email sent successfully! ID: " + emailDto.getId())
                .build());
    }
}
