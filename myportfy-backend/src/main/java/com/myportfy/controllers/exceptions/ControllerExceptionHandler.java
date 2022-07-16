package com.myportfy.controllers.exceptions;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.myportfy.services.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

import java.sql.SQLException;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.*;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<Response> objectNotFound(ObjectNotFoundException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(NOT_FOUND)
                .statusCode(NOT_FOUND.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(NOT_FOUND).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Response> validation (MethodArgumentNotValidException e, HttpServletRequest request) {
        ValidationError validationError = ValidationError.builder()
                        .timeStamp(now())
                        .status(UNPROCESSABLE_ENTITY)
                        .statusCode(UNPROCESSABLE_ENTITY.value())
                        .message("Validation error.")
                        .path(request.getRequestURI())
                        .build();
        for (FieldError x : e.getBindingResult().getFieldErrors()) {
            validationError.addError(x.getField(), x.getDefaultMessage());
        }
        return ResponseEntity.status(UNPROCESSABLE_ENTITY).body(validationError);
    }

    @ExceptionHandler(DataIntegrityException.class)
    public ResponseEntity<Response> dataIntegrity (DataIntegrityException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(CONFLICT)
                .statusCode(CONFLICT.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(CONFLICT).body(response);
    }

    @ExceptionHandler(AuthorizationException.class)
    public ResponseEntity<Response> authorization(AuthorizationException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(FORBIDDEN)
                .statusCode(FORBIDDEN.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(FORBIDDEN).body(response);
    }

    @ExceptionHandler(EmailException.class)
    public ResponseEntity<Response> MailSend (EmailException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(INTERNAL_SERVER_ERROR)
                .statusCode(INTERNAL_SERVER_ERROR.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<Response> invalidPassword (InvalidPasswordException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(UNPROCESSABLE_ENTITY)
                .statusCode(UNPROCESSABLE_ENTITY.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(UNPROCESSABLE_ENTITY).body(response);
    }

    @ExceptionHandler(ConfirmationTokenException.class)
    public ResponseEntity<Response> invalidToken (ConfirmationTokenException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(BAD_REQUEST)
                .statusCode(BAD_REQUEST.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(BAD_REQUEST).body(response);
    }

    @ExceptionHandler(FileException.class)
    public ResponseEntity<Response> file (FileException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(BAD_REQUEST)
                .statusCode(BAD_REQUEST.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(BAD_REQUEST).body(response);
    }

    @ExceptionHandler(AmazonServiceException.class)
    public ResponseEntity<Response> amazonService (AmazonServiceException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(BAD_REQUEST)
                .statusCode(HttpStatus.valueOf(e.getErrorCode()).value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(HttpStatus.valueOf(e.getErrorCode())).body(response);
    }

    @ExceptionHandler(AmazonClientException.class)
    public ResponseEntity<Response> amazonClient (AmazonClientException e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(BAD_REQUEST)
                .statusCode(BAD_REQUEST.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(BAD_REQUEST).body(response);
    }

    @ExceptionHandler(AmazonS3Exception.class)
    public ResponseEntity<Response> amazonS3 (AmazonS3Exception e, HttpServletRequest request) {
        Response response = Response.builder()
                .timeStamp(now())
                .status(BAD_REQUEST)
                .statusCode(BAD_REQUEST.value())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(BAD_REQUEST).body(response);
    }

    // Data integrity violation for disabled user fields
    @ExceptionHandler(SQLException.class)
    public ResponseEntity<Response> SQLException (SQLException e, HttpServletRequest request) {
        String message = e.getMessage();
        String violationMessage = "Unique index or primary key violation";
        if(message.contains("PUBLIC._USER(USERNAME)") && message.contains(violationMessage)){
            message = "Este username já esta em uso 😥";
        } else if (message.contains("PUBLIC._USER(EMAIL)") && message.contains(violationMessage)){
            message = "Este e-mail já esta em uso 😅";
        } else {
            message = "Hmm... não esperávamos por este erro 🤔";
        }
        return ResponseEntity.status(CONFLICT).body(Response.builder()
                .timeStamp(now())
                .status(CONFLICT)
                .statusCode(CONFLICT.value())
                .message(message)
                .path(request.getRequestURI())
                .build());
    }
}
