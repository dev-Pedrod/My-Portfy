package com.myportfy.dto.email;

import com.myportfy.dto.AResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class EmailDto extends AResponseDto {

    @Email(message = "must be a well formed email address.")
    private String emailTo;

    @NotNull(message = "The subject cannot be empty.")
    @NotBlank(message = "The subject cannot be blank.")
    private String subject;

    @NotNull(message = "The content cannot be empty.")
    @NotBlank(message = "The content cannot be blank.")
    private String content;
}
