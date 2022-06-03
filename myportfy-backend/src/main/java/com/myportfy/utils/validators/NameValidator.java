package com.myportfy.utils.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NameValidator {

    public static Boolean validateUsername(String userName) {
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*$");
        Matcher matcher = pattern.matcher(userName);
        return matcher.find();
    }

    public static Boolean validateName(String name) {
        Pattern pattern = Pattern.compile("^[a-zA-ZÀ-ú]+([ ']?[a-zA-ZÀ-ú])*$");
        Matcher matcher = pattern.matcher(name);
        return matcher.find();
    }
}
