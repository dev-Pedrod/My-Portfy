package com.myportfy.dto.post;

import com.myportfy.domain.Post;
import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class PostDto extends AResponseDto {

    @Length(max = 80, message = "The maximum length is 80 characters.")
    @NotNull(message = "The title cannot be empty.")
    @NotBlank(message = "The content cannot be blank.")
    private String title;

    @Length
    @NotNull(message = "The content cannot be empty.")
    @NotBlank(message = "The content cannot be blank.")
    private String content;

    @Length(max = 100, message = "the maximum length is 100 characters.")
    @NotBlank(message = "The description cannot be blank.")
    private String description;

    public PostDto(Post object) {
        this.title = object.getTitle();
        this.content = object.getContent();
        this.description = object.getDescription();
        this.setId(object.getId());
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
