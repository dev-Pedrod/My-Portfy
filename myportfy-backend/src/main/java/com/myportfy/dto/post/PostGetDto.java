package com.myportfy.dto.post;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.category.CategoryDto;
import com.myportfy.dto.user.UserGetDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Getter @Setter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class PostGetDto extends DtoDomain {
    private String title;
    private String content;
    private String description;
    private String ImageURL;
    private UserGetDto author;
    private List<CategoryDto> categories = new ArrayList<>();
}
