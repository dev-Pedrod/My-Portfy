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

    @Length(min = 2, max = 16, message = "O tamanho deve ser entre 2 e 16 caracteres.")
    private String username;
    @Length(min = 2, max = 100, message = "O tamanho deve ser entre 2 e 100 caracteres.")
    private String fullName;
    private Date birthDate;
    private Gender gender;
    @Email(message = "Deve ser um endereço de e-mail bem formado.")
    @Length(min = 1, message = "O email não pode ser em branco.")
    private String email;
}
