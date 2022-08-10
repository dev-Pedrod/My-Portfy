package com.myportfy.utils.validators.password;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = PasswordValidator.class)
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface Password {

    String message() default "Erro de validação de senha.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
