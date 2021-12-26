package com.myportfy.dto.user;

import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class UserUpdateDto extends AResponseDto {

    @Length(min = 2, max = 32)
    private String userName;
    @Length(min = 2, max = 32)
    private String firstName;
    @Length(min = 2, max = 32)
    private String lastName;
    private Date birthDate;
    private Integer gender;
    @Email
    private String email;
}
