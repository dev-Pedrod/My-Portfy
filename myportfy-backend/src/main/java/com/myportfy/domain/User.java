package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myportfy.domain.enums.Gender;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.dto.user.UserUpdateDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity(name = "_user")
@NoArgsConstructor
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

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Post> posts = new ArrayList<>();

    public User(String username, String fullName, Date birthDate, Gender gender, String email, String password) {
        this.username = username;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = (gender == null) ? null : gender.getId();
        this.email = email;
        this.password = password;
    }

    public User(UserCreateDto object) {
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

    public User(UserUpdateDto object) {
        this.setId(object.getId());
        this.username = object.getUsername();
        this.fullName = object.getFullName();
        this.birthDate = object.getBirthDate();
        this.gender = object.getGender();
        this.email = object.getEmail();
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
