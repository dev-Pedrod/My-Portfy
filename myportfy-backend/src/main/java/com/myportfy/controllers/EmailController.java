package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.Email;
import com.myportfy.dto.email.EmailDto;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
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
    @Autowired
    private IUserService userService;

    @PostMapping("/sending")
    public ResponseEntity<Response> sendingEmail(@Valid @RequestBody EmailDto emailDto){
        Email email = new Email();
        BeanUtils.copyProperties(emailDto, email);
        email.setEmailFrom(userService.findById(userService.currentUserLoggedIn().getId()).getEmail());
        emailService.create(email);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(emailDto.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Email sent successfully! ID: " + emailDto.getId())
                .build());
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping("")
    public ResponseEntity<Page<Email>> getAll(Pageable pageable) {
        return ResponseEntity.ok(emailService.findAll(pageable));
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Email> getById(@PathVariable Long id) {
        return ResponseEntity.ok(emailService.findById(id));
    }
}
