package com.myportfy.controllers;

import com.myportfy.domain.User;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.PasswordDto;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.dto.user.UserGetDto;
import com.myportfy.dto.user.UserUpdateDto;
import com.myportfy.services.IConfirmationTokenService;
import com.myportfy.services.IUserService;
import com.myportfy.utils.image.ImageUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;
    @Autowired
    private IConfirmationTokenService tokenService;
    @Autowired
    private ModelMapper modelMapper;
    @Value("${S3URL}")
    private URI S3URI;

    @GetMapping("")
    public ResponseEntity<Page<? extends DtoDomain>> getAll(Pageable pageable) {
        return ResponseEntity.ok(userService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
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
                                                        @Valid @RequestBody PasswordDto password) {
        tokenService.validateAndConfirmUpdatePassword(token, password);
        return ResponseEntity.ok("Password changed successfully!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.isCurrentUserLoggedIn(id);
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<UserGetDto>> getByName(@PathVariable String name) {
        return ResponseEntity.ok(userService.findByName(name).stream()
                .map(x -> modelMapper.map(x, UserGetDto.class))
                .collect(Collectors.toList()));
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<UserGetDto> getByEmail(@PathVariable String email) {
        return ResponseEntity.ok(modelMapper.map(userService.findByEmailIgnoreCase(email), UserGetDto.class));
    }

    @GetMapping("/by-username/{username}")
    public ResponseEntity<List<UserGetDto>> getByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.findByUsername(username).stream()
                .map(x -> modelMapper.map(x, UserGetDto.class))
                .collect(Collectors.toList()));
    }

    @GetMapping("/confirm-account")
    public ResponseEntity<String> confirmAccount(@RequestParam("token") String token) {
        tokenService.validateAndConfirmAccount(token);
        return ResponseEntity.ok("Confirmed!");
    }

    @PutMapping("/reset-password")
    public ResponseEntity<String> confirmResetPassword(@RequestParam("token") String token,
                                                       @Valid @RequestBody PasswordDto password) {
        tokenService.validateAndConfirmResetPassword(token, password);
        return ResponseEntity.ok("Password changed successfully!");
    }

    @PostMapping("/picture")
    public ResponseEntity<Void> uploadProfilePicture(@RequestParam(name = "file") MultipartFile multipartFile) {
        User user = userService.findById(userService.currentUserLoggedIn().getId());
        String fileName = "USER-" + UUID.randomUUID();
        URI uri = URI.create(S3URI + fileName);
        userService.uploadProfilePicture(
                ImageUtils.resize(
                        ImageUtils.cropSquare(
                                ImageUtils.getJpgImageFromFile(multipartFile)),
                        612), fileName, user);
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/reactivate-user")
    public ResponseEntity<String> reactivateUser(@RequestParam("token") String token) {
        tokenService.validateAndReactivateUser(token);
        return ResponseEntity.ok("Sua conta foi reativada com sucesso!");
    }

    @DeleteMapping("/delete-profile-picture")
    public ResponseEntity<Void> deleteProfilePicture() {
        userService.deleteProfilePicture(userService.findById(userService.currentUserLoggedIn().getId()));
        return ResponseEntity.noContent().build();
    }
}
