package com.myportfy.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity(name = "_ConfirmationToken" )
@Getter
@Setter
@NoArgsConstructor
public class ConfirmationToken extends DomainEntity{

    @NotNull
    private String token;
    @NotNull
    private LocalDateTime expiresAt;
    private LocalDateTime confirmedAt;
    private String userEmail; //only for user reactivation tokens
    @ManyToOne
    @JoinColumn(name = "_user_id")
    private User user;

    public ConfirmationToken(String token, LocalDateTime expiresAt, User user) {
        super();
        this.token = token;
        this.expiresAt = expiresAt;
        this.user = user;
    }

    public ConfirmationToken(String token, LocalDateTime expiresAt, String userEmail) {
        super();
        this.token = token;
        this.expiresAt = expiresAt;
        this.userEmail = userEmail;
    }
}
