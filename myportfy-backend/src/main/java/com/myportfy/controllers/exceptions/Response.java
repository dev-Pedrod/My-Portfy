package com.myportfy.controllers.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@SuperBuilder
@JsonInclude(NON_NULL)
public class Response {

    private LocalDateTime timeStamp;
    private HttpStatus status;
    private int statusCode;
    private String message;
    private String path;
}
