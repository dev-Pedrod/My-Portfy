package com.myportfy.utils.validators.user;

import com.myportfy.controllers.exceptions.FieldMessage;
import com.myportfy.domain.User;
import com.myportfy.dto.user.UserUpdateDto;
import com.myportfy.repositories.UserRepository;
import com.myportfy.services.IUserService;
import com.myportfy.utils.validators.NameValidator;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.List;

public class UserUpdateValidator implements ConstraintValidator<UserUpdate, UserUpdateDto> {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private IUserService userService;

    @Override
    public void initialize(UserUpdate constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(UserUpdateDto object, ConstraintValidatorContext context) {

        List<FieldMessage> fieldMessages = new ArrayList<>();

        User userAux = userRepository.findByEmailIgnoreCase(object.getEmail());
        if (userAux != null && !userService.currentUserLoggedIn().getId().equals(userAux.getId()) ) {
            fieldMessages.add(new FieldMessage("email", "This email already exists"));
        }

        if (object.getUsername() != null) {
            if (!NameValidator.validateUsername(object.getUsername())) {
                fieldMessages.add(new FieldMessage("username", "Invalid character. Use only letters, numbers and .-_ between the letters."));
            }
            if(userRepository.findByUsernameIgnoreCase(object.getUsername()) != null){
                fieldMessages.add(new FieldMessage("username", "This username already exists"));
            }
        }
        if (object.getFullName() != null){
            if (!NameValidator.validateName(object.getFullName()))
                fieldMessages.add(new FieldMessage("fullName", "Invalid character. Use only letters."));
        }

        for (FieldMessage e : fieldMessages) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return fieldMessages.isEmpty();
    }
}
