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

    @Length(min = 2, max = 16)
    private String username;
    @Length(min = 2, max = 255)
    private String fullName;
    private Date birthDate;
    private Integer gender;
    @Email
    private String email;
}
