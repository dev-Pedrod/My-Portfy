package com.myportfy.dto.post;

import com.myportfy.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter @Setter
public class PostCreateDto {
    @Length(max = 50, message = "O tamanho máximo é de 50 caracteres.")
    @NotNull(message = "O título não pode ser vazio.")
    @NotBlank(message = "O título não pode ser em branco.")
    private String title;
    @Length
    @NotNull(message = "O conteúdo não pode ser vazio.")
    @NotBlank(message = "O conteúdo não pode ser em branco.")
    private String content;
    @Length(max = 100, message = "O tamanho máximo é de 100 caracteres.")
    @NotBlank(message = "A descrição não pode ser em branco.")
    private String description;
    private User author;
    private Set<Long> categoriesId = new HashSet<>();
}
