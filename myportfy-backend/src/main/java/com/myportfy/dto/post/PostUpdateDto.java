package com.myportfy.dto.post;

import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@NoArgsConstructor
public class PostUpdateDto extends DtoDomain {

    @Length(max = 50, message = "O tamanho máximo é de 50 caracteres.")
    private String title;
    @NotBlank(message = "O conteúdo não pode estar em branco.")
    @Length(max = 1500, min = 1 , message = "O tamanho deve ser entre 1 e 1500 caracteres.")
    private String content;
    @Length(max = 100, message = "O tamanho máximo é de 100 caracteres.")
    private String description;
    private Set<Long> categoriesId = new HashSet<>();
}
