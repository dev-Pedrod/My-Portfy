package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;
import static javax.persistence.GenerationType.IDENTITY;

@Getter
@Setter
@MappedSuperclass
@JsonInclude(NON_NULL)
public abstract class DomainEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private LocalDateTime createdAt;
    private LocalDateTime deletedAt;
    private LocalDateTime updatedAt;

    public DomainEntity(){
        if(id == null){
            createdAt = LocalDateTime.now();
            return;
        }
        updatedAt = LocalDateTime.now();
    }
}
