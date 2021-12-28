package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.myportfy.dto.post.PostDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Setter
@Getter
@Entity
@NoArgsConstructor
@JsonInclude(NON_NULL)
@Where(clause = "deleted_at is null")
public class Post extends DomainEntity{

    @Length(max = 80, message = "The maximum length is 80 characters.")
    @NotNull(message = "The title cannot be empty.")
    @NotBlank(message = "The title cannot be blank.")
    private String title;
    @Column(columnDefinition = "TEXT")
    @NotNull(message = "The content cannot be empty.")
    @NotBlank(message = "The content cannot be blank.")
    private String content;
    @Length(max = 100, message = "the maximum length is 100 characters.")
    @NotBlank(message = "The description cannot be blank.")
    private String description;
    @ManyToOne
    @JoinColumn(name = "User_id")
    private User author;

    @JsonIgnore
    @ManyToMany
    private List<Category> categories = new ArrayList<>();

    public Post(String title, User author, String content, String description){
        this.title = title;
        this.author = author;
        this.content = content;
        this.description = description;
    }

    public Post(PostDto object) {
        this.title = object.getTitle();
        this.content = object.getContent();
        this.description = object.getDescription();
        this.setId(object.getId());
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
