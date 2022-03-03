package com.myportfy.controllers;

import com.myportfy.domain.User;
import com.myportfy.dto.user.PasswordUpdateDto;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.dto.user.UserUpdateDto;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;
    @Autowired
    private IConfirmationTokenService tokenService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<Page<User>> getAll(Pageable pageable) {
        return ResponseEntity.ok(userService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Void> createUser(@Valid @RequestBody UserCreateDto object) {
        User user = modelMapper.map(object, User.class);
        userService.create(user);
        return ResponseEntity.created(ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(user.getId())
                .toUri()).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateUser(@Valid @RequestBody UserUpdateDto object, @PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        object.setId(id);
        userService.update(modelMapper.map(object, User.class));
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update-password")
    public ResponseEntity<String> confirmUpdatePassword(@RequestParam("token") String token,
                                                        @Valid @RequestBody PasswordUpdateDto password) {
        tokenService.validateAndConfirmUpdatePassword(token, password);
        return ResponseEntity.ok("Password changed successfully!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        userService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<User>> getByName(@PathVariable String name){
        return ResponseEntity.ok(userService.findByName(name));
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<User> getByEmail(@PathVariable String email){
        return ResponseEntity.ok(userService.findByEmail(email));
    }

    @GetMapping("/by-username/{username}")
    public ResponseEntity<List<User>> getByUsername(@PathVariable String username){
        return ResponseEntity.ok(userService.findByUsername(username));
    }

    @GetMapping("/confirm-account")
    public ResponseEntity<String> confirmAccount(@RequestParam("token") String token) {
        tokenService.validateAndConfirmAccount(token);
        return ResponseEntity.ok("Confirmed!");
    }

    @PutMapping("/reset-password")
    public ResponseEntity<String> confirmResetPassword(@RequestParam("token") String token,
                                                        @Valid @RequestBody PasswordUpdateDto password) {
        tokenService.validateAndConfirmResetPassword(token, password);
        return ResponseEntity.ok("Password changed successfully!");
    }
}
