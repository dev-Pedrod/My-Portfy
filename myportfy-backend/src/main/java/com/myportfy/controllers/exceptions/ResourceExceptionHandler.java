package com.myportfy.controllers.exceptions;

import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<Response> objectNotFound(ObjectNotFoundException exp, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(NOT_FOUND)
                .statusCode(NOT_FOUND.value())
                .message(exp.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(NOT_FOUND).body(response);
    }
}
