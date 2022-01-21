package com.myportfy.utils.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordValidator {

    public static Boolean validatePassword(String password) {
        Pattern pattern = Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$.%*+-])(?=\\S+$).{8,32}$");
        Matcher matcher = pattern.matcher(password);

        return matcher.find();
    }
}
