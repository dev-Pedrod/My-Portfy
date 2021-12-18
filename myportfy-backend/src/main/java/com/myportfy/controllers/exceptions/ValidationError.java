package com.myportfy.controllers.exceptions;

import lombok.Getter;
import lombok.experimental.SuperBuilder;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@SuperBuilder
public class ValidationError extends Response {

    private final List<FieldMessage> errors = new ArrayList<>();

    public ValidationError(LocalDateTime timeStamp, HttpStatus status, int statusCode,String message, String path) {
        super(timeStamp, status, statusCode ,message, path);
    }

    public void addError(String fieldName, String message) {
        errors.add(new FieldMessage(fieldName, message));
    }
}
