package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myportfy.domain.enums.Gender;
import com.myportfy.domain.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.*;

@Getter @Setter
@AllArgsConstructor
@Entity(name = "_user")
@Where(clause = "disabled_at is null")
public class User extends DomainEntity{

    @Column(unique = true)
    private String username;
    private String fullName;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date birthDate;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Column(unique = true)
    private String email;
    @JsonIgnore
    private String password;
    private Boolean isEmailEnabled;
    private String profilePictureURL;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "_USER_ROLES")
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Post> posts = new ArrayList<>();

    public User() {
        setRoles(Collections.singleton(Role.USER));
        setIsEmailEnabled(false);
    }
}
