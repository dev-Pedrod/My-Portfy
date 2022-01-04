package com.myportfy.dto.category;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myportfy.domain.Category;
import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Getter
@Setter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class CategoryDto extends AResponseDto {

    @NotNull(message = "The name cannot be empty.")
    @NotBlank(message = "The name cannot be blank.")
    private String name;

    public CategoryDto(Category object) {
        this.name = object.getName();
        this.setId(object.getId());
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
