package com.myportfy.dto.user;

import com.myportfy.domain.enums.Gender;
import com.myportfy.dto.DtoDomain;
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
public class UserUpdateDto extends DtoDomain {

    @Length(min = 2, max = 16, message = "the length must be between 2 and 16.")
    private String username;
    @Length(min = 2, max = 255, message = "the length must be between 2 and 255.")
    private String fullName;
    private Date birthDate;
    private Gender gender;
    @Email(message = "must be a well formed email address.")
    private String email;
}
