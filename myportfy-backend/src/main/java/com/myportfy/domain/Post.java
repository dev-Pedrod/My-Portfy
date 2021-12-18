package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myportfy.dto.post.PostDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@NoArgsConstructor
public class Post extends DomainEntity{

    @Column(length = 80, nullable = false)
    private String title;
    @NotEmpty(message = "Mandatory completion.")
    private String author;
    @Column(columnDefinition = "TEXT", nullable = false)
    @NotEmpty(message = "The content cannot be empty.")
    private String content;
    @Length(max = 100, message = "the maximum length is 100 characters.")
    private String description;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "POST_CATEGORIES",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories = new ArrayList<>();

    public Post(String title,String author, String content, String description){
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
