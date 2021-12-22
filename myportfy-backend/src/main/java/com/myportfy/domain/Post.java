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
    @Column(columnDefinition = "TEXT", nullable = false)
    @NotEmpty(message = "The content cannot be empty.")
    private String content;
    @Length(max = 100, message = "the maximum length is 100 characters.")
    private String description;

    //@NotEmpty(message = "Mandatory completion.")
    @ManyToOne
    @JoinColumn(name = "author_id")
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
