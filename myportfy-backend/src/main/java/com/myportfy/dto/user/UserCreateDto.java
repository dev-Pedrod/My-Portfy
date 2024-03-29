package com.myportfy.dto.user;

import com.myportfy.domain.enums.Gender;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.PasswordDto;
import com.myportfy.utils.validators.user.UserCreate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@UserCreate
@NoArgsConstructor
public class UserCreateDto extends DtoDomain {

    @NotNull(message = "O e-mail não pode ser vazio.")
    @NotBlank(message = "O e-mail não pode ser em branco.")
    @Email(message = "Deve ser um endereço de e-mail bem formado.")
    private String email;

    @NotNull(message = "O nome não pode ser vazio.")
    @NotBlank(message = "O nome não pode ser em branco.")
    @Length(min = 2, max = 55, message = "O tamanho deve ser entre 2 e 55 caracteres.")
    private String fullName;

    @NotNull(message = "O nome de usuário não pode ser vazio.")
    @NotBlank(message = "O nome de usuário não pode ser em branco.")
    @Length(min = 2, max = 16, message = "O tamanho deve ser entre 2 e 16 caracteres.")
    private String username;

    @Valid
    private PasswordDto password;
    private Date birthDate;
    private Gender gender;
}
