package com.myportfy.utils.validators.password;

import com.myportfy.dto.PasswordDto;
import com.myportfy.services.exceptions.InvalidPasswordException;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordValidator implements ConstraintValidator<Password, PasswordDto> {

    public static Boolean validatePassword(String password) {
        Pattern pattern = Pattern.compile("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,32}$");
        Matcher matcher = pattern.matcher(password);
        return matcher.find();
    }

    public static void validatePasswordUpdate(PasswordDto passwordUpdate){
        if(!validatePassword(passwordUpdate.getPassword())){
            throw new InvalidPasswordException("A senha deve conter letras maiúsculas, minúsculas e números.");
        }
        else if (!passwordUpdate.getConfirmPassword().equals(passwordUpdate.getPassword())){
            throw new InvalidPasswordException("As senhas devem ser iguais.");
        }
    }

    @Override
    public void initialize(Password constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(PasswordDto value, ConstraintValidatorContext context) {
        validatePasswordUpdate(value);
        return true;
    }
}
