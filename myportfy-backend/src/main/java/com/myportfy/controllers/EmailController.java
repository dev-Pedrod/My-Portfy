package com.myportfy.controllers;

import com.myportfy.domain.Email;
import com.myportfy.domain.User;
import com.myportfy.dto.email.EmailDto;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

@RestController
@RequestMapping("/emails")
public class EmailController {

    @Autowired
    private IEmailService emailService;
    @Autowired
    private IUserService userService;

    @PostMapping("/send")
    public ResponseEntity<Void> sendingEmail(@Valid @RequestBody EmailDto emailDto){
        Email email = new Email();
        BeanUtils.copyProperties(emailDto, email);
        email.setEmailFrom(userService.findById(userService.currentUserLoggedIn().getId()).getEmail());
        emailService.create(email);
        return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(email.getId())
                .toUri()).build();
    }

    @GetMapping("send-account-confirmation")
    public ResponseEntity<String> sendAccountConfirmation() {
        emailService.sendAccountConfirmation(userService.findById(userService.currentUserLoggedIn().getId()));
        return ResponseEntity.ok("Email sent!");
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

    @GetMapping("/send-password-change")
    public ResponseEntity<String> updatePassword() {
        User user = userService.findById(userService.currentUserLoggedIn().getId());
        if (!user.getIsEmailEnabled()) {
            throw new AuthorizationException("access denied. Confirm your email to change your password.");
        }
        emailService.sendPasswordUpdateConfirmation(user);
        return ResponseEntity.ok("Email for password change sent");
    }

    @GetMapping("/send-reactivate-user")
    public ResponseEntity<String> ReactivateUser(@RequestParam String email) {
        emailService.sendEmailReactivateUser(email);
        return ResponseEntity.ok("Email sent");
    }
}
