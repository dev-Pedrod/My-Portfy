package com.myportfy.controllers;

import com.myportfy.security.JwtUtil;
import com.myportfy.services.IEmailService;
import com.myportfy.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

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

    @PostMapping("/forgot-password")
    public ResponseEntity<Void> forgotPassword(@RequestParam String email) {
        emailService.sendResetPassword(userService.findByEmailIgnoreCase(email));
        return ResponseEntity.ok().build();
    }
}
