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
import java.util.HashSet;
import java.util.Set;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Setter
@Getter
@Entity(name = "_post")
@NoArgsConstructor
@JsonInclude(NON_NULL)
@Where(clause = "deleted_at is null")
public class Post extends DomainEntity{

    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String description;
    @ManyToOne
    @JoinColumn(name = "User_id")
    private User author;

    @JsonIgnore
    @ManyToMany
    private Set<Category> categories = new HashSet<>();

    public Post(String title, User author, String content, String description, Set<Category> categories){
        this.title = title;
        this.author = author;
        this.content = content;
        this.description = description;
        this.categories = categories;
    }

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
