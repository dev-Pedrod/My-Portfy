package com.myportfy.controllers;

import com.myportfy.security.JwtUtil;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.Email;

@RestController
@RequestMapping("auth/")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private IUserService userService;
    @Autowired
    private IEmailService emailService;

    @PostMapping("/refresh-token")
    public ResponseEntity<Void> refreshToken(HttpServletResponse response){
        response.addHeader("Authorization", "Bearer "
                            + jwtUtil.generateToken(userService.currentUserLoggedIn().getUsername()));
        response.addHeader("access-control-expose-headers", "Authorization");
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestParam @Email String email) {
        emailService.sendResetPassword(userService.findByEmail(email));
        return ResponseEntity.ok("");
    }
}
