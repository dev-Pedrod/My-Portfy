package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.User;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.dto.user.UserUpdateDto;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;
    @Autowired
    private IConfirmationTokenService tokenService;

    @GetMapping("")
    public ResponseEntity<Page<User>> getAll(Pageable pageable) {
        return ResponseEntity.ok(userService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Response> createUser(@Valid @RequestBody UserCreateDto object) {
        User user = new User();
        BeanUtils.copyProperties(object, user);
        userService.create(user);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(object.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Object created successfully! ID: " + object.getId())
                .build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateUser(@Valid @RequestBody UserUpdateDto object, @PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        object.setId(id);
        userService.update(new User(object));
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object updated successfully! ID: " + id)
                .build());
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Response> updatePassword(@Valid @RequestBody UserUpdateDto object, @PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        object.setId(id);
        userService.update(new User(object));
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object updated successfully! ID: " + id)
                .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteUser(@PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        userService.delete(id);
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object deleted successfully! ID: " + id)
                .build());
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
}
