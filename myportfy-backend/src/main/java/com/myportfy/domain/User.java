package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myportfy.domain.enums.Gender;
import com.myportfy.domain.enums.Role;
import com.myportfy.dto.user.UserUpdateDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@Entity(name = "_user")
@Where(clause = "deleted_at is null")
public class User extends DomainEntity{

    @Column(unique = true)
    private String username;
    private String fullName;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date birthDate;
    private Integer gender;
    @Column(unique = true)
    private String email;
    @JsonIgnore
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "_ROLES")
    private Set<Integer> roles = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Post> posts = new ArrayList<>();

    public User() {
        setRoles(Role.USER);
    }

    public User(String username, String fullName, Date birthDate, Gender gender, String email, String password) {
        this.username = username;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = (gender == null) ? null : gender.getId();
        this.email = email;
        this.password = password;
        setRoles(Role.USER);
    }

    public User(UserUpdateDto object) {
        this.setId(object.getId());
        this.username = object.getUsername();
        this.fullName = object.getFullName();
        this.birthDate = object.getBirthDate();
        this.gender = object.getGender();
        this.email = object.getEmail();
        this.password = object.getPassword();
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }

    public Set<Role> getRoles() {
        return roles.stream().map(Role::toEnum).collect(Collectors.toSet());
    }

    public void setRoles(Role role) {
        roles.add(role.getId());
    }
}
