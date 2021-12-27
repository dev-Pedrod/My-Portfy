package com.myportfy.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Gender {

    MALE(1, "Male"),
    FEMALE(2, "Female"),
    OTHER(3, "Other");

    private final int id;
    private final String description;

    public static Gender toEnum(Integer id){
        if(id == null) {
            return null;
        }
        for(Gender x : Gender.values()) {
            if(id.equals(x.getId())){
                return x;
            }
        }
        throw new IllegalArgumentException("Invalid code: " + id);
    }
}
