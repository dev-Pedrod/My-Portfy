package com.myportfy.dto.post;

import com.myportfy.dto.DtoDomain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@NoArgsConstructor
public class PostDto extends DtoDomain {

    @Length(max = 80, message = "The maximum length is 80 characters.")
    private String title;
    @Length(min = 1)
    private String content;
    @Length(max = 100, message = "The maximum length is 100 characters.")
    private String description;
    private Set<Long> categoriesId = new HashSet<>();
}
