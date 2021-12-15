package com.myportfy.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@AllArgsConstructor
public class Category extends DomainEntity {

    private String name;
    @ManyToMany(mappedBy = "categories")
    private List<Post> posts = new ArrayList<>();
}
