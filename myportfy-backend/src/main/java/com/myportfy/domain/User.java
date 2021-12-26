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

import static javax.persistence.CascadeType.ALL;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Where(clause = "deleted_at is null")
public class User extends DomainEntity{

    @Column(unique = true)
    private String userName;
    private String firstName;
    private String lastName;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date birthDate;
    private Integer gender;
    @Column(unique = true)
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "author", cascade = ALL)
    private List<Post> posts = new ArrayList<>();

    public User(String userName, String firstName, String lastName, Date birthDate, Gender gender, String email) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = (gender == null) ? null : gender.getId();
        this.email = email;
    }

    public User(UserCreateDto object) {
        this.setId(object.getId());
        this.userName = object.getUserName();
        this.firstName = object.getFirstName();
        this.lastName = object.getLastName();
        this.birthDate = object.getBirthDate();
        this.gender = object.getGender();
        this.email = object.getEmail();
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }

    public User(UserUpdateDto object) {
        this.setId(object.getId());
        this.userName = object.getUserName();
        this.firstName = object.getFirstName();
        this.lastName = object.getLastName();
        this.birthDate = object.getBirthDate();
        this.gender = object.getGender();
        this.email = object.getEmail();
        this.setCreatedAt(object.getCreatedAt());
        this.setDeletedAt(object.getDeletedAt());
        this.setUpdatedAt(object.getUpdatedAt());
    }
}
