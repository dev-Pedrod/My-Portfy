package com.myportfy.utils.validators.password;

import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.dto.user.UserCreateDto;
import com.myportfy.services.exceptions.InvalidPasswordException;
import com.myportfy.utils.validators.user.UserCreate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordValidator implements ConstraintValidator<PasswordUpdate, PasswordUpdateDto> {

    public static Boolean validatePassword(String password) {
        Pattern pattern = Pattern.compile("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,32}$");
        Matcher matcher = pattern.matcher(password);
        return matcher.find();
    }

    public static void validatePasswordUpdate(PasswordUpdateDto passwordUpdate){
        if(!validatePassword(passwordUpdate.getPassword())){
            throw new InvalidPasswordException("A senha deve conter letras maiúsculas, minúsculas e números.");
        }
        else if (!passwordUpdate.getConfirmPassword().equals(passwordUpdate.getPassword())){
            throw new InvalidPasswordException("As senhas devem ser iguais.");
        }
    }

    @Override
    public void initialize(PasswordUpdate constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(PasswordUpdateDto value, ConstraintValidatorContext context) {
        validatePasswordUpdate(value);
        return true;
    }
}
