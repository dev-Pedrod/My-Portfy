package com.myportfy.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Category extends DomainEntity {

    private String name;
    @ManyToMany(mappedBy = "categories")
    private List<Post> posts = new ArrayList<>();

    public Category(String name) {
        this.name = name;
    }
}
