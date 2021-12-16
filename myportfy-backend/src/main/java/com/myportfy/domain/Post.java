package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@NoArgsConstructor
public class Post extends DomainEntity{

    @Column(length = 255, nullable = false)
    private String title;
    private String author;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;
    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "POST_CATEGORIES",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories = new ArrayList<>();

    public Post(String title,String author, String content){
        this.title = title;
        this.author = author;
        this.content = content;
    }
}
