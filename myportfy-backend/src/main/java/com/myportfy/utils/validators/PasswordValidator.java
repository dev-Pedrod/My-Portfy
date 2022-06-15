package com.myportfy.utils.validators;

import com.myportfy.dto.PasswordUpdateDto;
import com.myportfy.services.exceptions.InvalidPasswordException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordValidator {

    public static Boolean validatePassword(String password) {
        Pattern pattern = Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,32}$");
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
}
