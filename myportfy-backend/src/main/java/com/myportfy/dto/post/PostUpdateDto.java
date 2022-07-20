package com.myportfy.dto.post;

import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@NoArgsConstructor
public class PostUpdateDto extends DtoDomain {

    @Length(max = 50, message = "O tamanho máximo é de 50 caracteres.")
    private String title;
    @Length(min = 1)
    private String content;
    @Length(max = 100, message = "O tamanho máximo é de 100 caracteres.")
    private String description;
    private Set<Long> categoriesId = new HashSet<>();
}
