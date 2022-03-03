package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Setter @Getter
@Entity(name = "_post")
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(NON_NULL)
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
}
