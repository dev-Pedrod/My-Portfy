package com.myportfy.dto.category;

import com.myportfy.domain.Category;
import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class CategoryDto extends AResponseDto {

    @NotEmpty(message = "Mandatory completion.")
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
