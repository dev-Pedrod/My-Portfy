package com.myportfy.dto.user;

import com.myportfy.domain.enums.Gender;
import com.myportfy.dto.DtoDomain;
import com.myportfy.utils.validators.user.UserCreate;
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
@UserCreate
@NoArgsConstructor
public class UserCreateDto extends DtoDomain {

    @NotNull(message = "The username cannot be empty.")
    @NotBlank(message = "The username cannot be blank.")
    @Length(min = 2, max = 16, message = "the length must be between 2 and 16.")
    private String username;

    @NotNull(message = "The fullName cannot be empty.")
    @NotBlank(message = "The fullName cannot be blank.")
    @Length(min = 2, max = 255, message = "the length must be between 2 and 255.")
    private String fullName;

    @NotNull(message = "The password cannot be empty.")
    @NotBlank(message = "The password cannot be blank.")
    @Length(min = 8, max = 32, message = "the length must be between 8 and 32.")
    private String password;

    private Date birthDate;
    private Gender gender;
    @NotNull(message = "The email cannot be empty.")
    @NotBlank(message = "The email cannot be blank.")
    @Email(message = "must be a well formed email address.")
    private String email;

}
