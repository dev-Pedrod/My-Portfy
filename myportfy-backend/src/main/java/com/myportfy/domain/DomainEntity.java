package com.myportfy.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;
import static java.time.LocalDateTime.now;
import static javax.persistence.GenerationType.IDENTITY;

@Getter
@Setter
@MappedSuperclass
@JsonInclude(NON_NULL)
public abstract class DomainEntity {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @Column(updatable = false)
    private LocalDateTime createdAt;
    private LocalDateTime disabledAt;
    private LocalDateTime updatedAt;

    public DomainEntity(){
        if(this.id == null){
            this.createdAt = now();
        }
    }
}
