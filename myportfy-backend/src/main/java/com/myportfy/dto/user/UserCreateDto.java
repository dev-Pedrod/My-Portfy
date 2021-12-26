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

    @NotNull
    @NotBlank
    @Length(min = 2, max = 32)
    private String userName;
    @NotNull
    @NotBlank
    @Length(min = 2, max = 32)
    private String firstName;
    @NotNull
    @NotBlank
    @Length(min = 2, max = 32)
    private String lastName;
    private Date birthDate;
    private Integer gender;
    @Email
    private String email;
}
