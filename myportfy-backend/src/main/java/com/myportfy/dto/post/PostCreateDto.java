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
    @Length(max = 80, message = "The maximum length is 80 characters.")
    @NotNull(message = "The title cannot be empty.")
    @NotBlank(message = "The title cannot be blank.")
    private String title;
    @Length
    @NotNull(message = "The content cannot be empty.")
    @NotBlank(message = "The content cannot be blank.")
    private String content;
    @Length(max = 100, message = "the maximum length is 100 characters.")
    @NotBlank(message = "The description cannot be blank.")
    private String description;
    private User author;
    private Set<Long> categoriesId = new HashSet<>();
}
