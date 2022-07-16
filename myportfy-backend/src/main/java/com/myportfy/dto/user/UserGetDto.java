package com.myportfy.dto.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Getter @Setter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class UserGetDto extends DtoDomain {
    private String username;
    private String fullName;
    private String profilePictureURL;
}
