package com.myportfy.dto.post;

import com.myportfy.domain.Post;
import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class PostDto extends AResponseDto {

    @Column(length = 80, nullable = false)
    private String title;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;
    @Length(max = 100, message = "the maximum length is 100 characters.")
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
