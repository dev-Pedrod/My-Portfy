package com.myportfy.domain;

import com.myportfy.dto.template.NavbarDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity(name = "_template")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Where(clause = "disabled_at is null")
public class Template extends DomainEntity {
    @OneToOne
    private User owner;
    @Embedded
    private NavbarDto navbar;
}
