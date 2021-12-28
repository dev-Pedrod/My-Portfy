package com.myportfy.dto.user;

import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class UserCreateDto extends AResponseDto {

    @NotNull(message = "The username cannot be empty.")
    @NotBlank(message = "The username cannot be blank.")
    @Length(min = 2, max = 16, message = "the length must be between 2 and 16.")
    private String username;
    @NotNull(message = "The fullName cannot be empty.")
    @NotBlank(message = "The fullName cannot be blank.")
    @Length(min = 2, max = 255, message = "the length must be between 2 and 255.")
    private String fullName;
    private Date birthDate;
    private Integer gender;
    @Email(message = "must be a well formed email address.")
    private String email;
}
