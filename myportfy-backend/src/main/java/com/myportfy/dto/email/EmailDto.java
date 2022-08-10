package com.myportfy.dto.email;

import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class EmailDto extends DtoDomain {

    @Email(message = "deve ser um endereço de e-mail bem formado.")
    private String emailTo;

    @NotNull(message = "O assunto não pode ser vazio.")
    @NotBlank(message = "O assunto não pode ser em branco.")
    private String subject;

    @NotNull(message = "O conteúdo não pode ser vazio")
    @NotBlank(message = "O conteúdo não pode ser em branco")
    private String content;
}
