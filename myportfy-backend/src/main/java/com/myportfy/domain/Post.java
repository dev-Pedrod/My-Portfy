package com.myportfy.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@Setter
@Getter
@Entity
public class Post extends DomainEntity{

    @Column(length = 255, nullable = false)
    private String title;
    private String author;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;
    @ManyToMany
    @JoinTable(name = "POST_CATEGORIES",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories = new HashSet<>();
}
