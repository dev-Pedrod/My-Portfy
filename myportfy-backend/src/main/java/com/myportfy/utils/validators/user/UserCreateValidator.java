package com.myportfy.utils.validators.user;

import com.myportfy.controllers.exceptions.FieldMessage;
import com.myportfy.domain.User;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.repositories.UserRepository;
import com.myportfy.utils.validators.NameValidator;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.List;

public class UserCreateValidator implements ConstraintValidator<UserCreate, UserCreateDto> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void initialize(UserCreate constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(UserCreateDto object, ConstraintValidatorContext context) {
        List<FieldMessage> fieldMessages = new ArrayList<>();

        User userAux = userRepository.findByEmailIgnoreCase(object.getEmail());
        if (userAux != null) {
            fieldMessages.add(new FieldMessage("email", "Este e-mail já esta em uso."));
        }

        if (!NameValidator.validateUsername(object.getUsername())) {
            fieldMessages.add(new FieldMessage("username", "Use somente letras, números e .-_ entre as letras."));
        }
        if(userRepository.findByUsernameIgnoreCase(object.getUsername()) != null){
            fieldMessages.add(new FieldMessage("username", "Este nome de usuário já esta em uso."));
        }

        if (!NameValidator.validateName(object.getFullName())){
            fieldMessages.add(new FieldMessage("fullName", "Use somente letras."));
        }

        for (FieldMessage e : fieldMessages) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return fieldMessages.isEmpty();
    }
}
