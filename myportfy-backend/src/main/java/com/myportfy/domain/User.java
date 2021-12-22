package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myportfy.domain.enums.Gender;
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
    @OneToMany(mappedBy = "author")
    private List<Post> posts = new ArrayList<>();

    public User(String userName, String firstName, String lastName, Date birthDate, Gender gender, String email) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = (gender == null) ? null : gender.getId();
        this.email = email;
    }
}
