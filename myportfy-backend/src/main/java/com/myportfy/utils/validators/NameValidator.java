package com.myportfy.utils.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NameValidator {

    public static Boolean validateUserName(String name) {
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*$");
        Matcher matcher = pattern.matcher(name);

        return matcher.find();
    }
}
