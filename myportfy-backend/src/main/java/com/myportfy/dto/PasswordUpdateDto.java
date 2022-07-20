package com.myportfy.dto;

import com.myportfy.utils.validators.password.PasswordUpdate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@PasswordUpdate
@NoArgsConstructor
public class PasswordUpdateDto {
    @NotNull(message = "A senha  não pode ser vazio.")
    @NotBlank(message = "A senha não pode ser em branco.")
    @Length(min = 8, max = 32, message = "O tamanho deve ser entre 8 e 32 caracteres.")
    private String password;
    @NotNull(message = "A confirmação  não pode ser vazio.")
    @NotBlank(message = "A confirmação não pode ser em branco.")
    @Length(min = 8, max = 32, message = "O tamanho deve ser entre 8 e 32 caracteres.")
    private String confirmPassword;
}
