package com.myportfy.dto.user;

import com.myportfy.dto.AResponseDto;
import com.myportfy.utils.validators.user.UserUpdate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import java.util.Date;

@Getter
@Setter
@UserUpdate
@NoArgsConstructor
public class UserUpdateDto extends AResponseDto {

    @Length(min = 2, max = 16, message = "the length must be between 2 and 16.")
    private String username;
    @Length(min = 2, max = 255, message = "the length must be between 2 and 255.")
    private String fullName;
    private Date birthDate;
    private Integer gender;
    @Email(message = "must be a well formed email address.")
    private String email;
    @Length(min = 8, max = 32, message = "the length must be between 8 and 32.")
    private String password;
}
