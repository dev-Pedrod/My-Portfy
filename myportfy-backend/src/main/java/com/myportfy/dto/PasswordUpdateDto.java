package com.myportfy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class PasswordUpdateDto {
    @NotNull(message = "The password cannot be empty.")
    @NotBlank(message = "The password cannot be blank.")
    @Length(min = 8, max = 32, message = "the length must be between 8 and 32.")
    private String password;
    @NotNull(message = "The confirm password cannot be empty.")
    @NotBlank(message = "The confirm password cannot be blank.")
    @Length(min = 8, max = 32, message = "the length must be between 8 and 32.")
    private String confirmPassword;
}
