package com.myportfy.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {

    ADMIN(1, "ROLE_ADMIN"),
    USER(2, "ROLE_USER");

    private final int id;
    private final String description;

    public static Role toEnum(Integer id){
        if(id == null) {
            return null;
        }
        for(Role x : Role.values()) {
            if(id.equals(x.getId())){
                return x;
            }
        }
        throw new IllegalArgumentException("Invalid code: " + id);
    }
}
