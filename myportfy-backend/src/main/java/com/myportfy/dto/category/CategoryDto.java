package com.myportfy.dto.category;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myportfy.domain.Category;
import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Getter
@Setter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class CategoryDto extends DtoDomain {

    @NotBlank(message = "O nome não pode ser em branco.")
    @Length(min = 1)
    private String name;

    public CategoryDto(Category object) {
        this.name = object.getName();
        this.setId(object.getId());
        this.setCreatedAt(object.getCreatedAt());
        this.setDisabledAt(object.getDisabledAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
