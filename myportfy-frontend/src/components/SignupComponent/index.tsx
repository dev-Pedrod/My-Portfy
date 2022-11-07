import React, {useContext, useState} from "react";
import {AxiosError, AxiosResponse} from "axios";

//
import {createUser} from "../../service/user.service";

// contexts
import {AuthContext} from "../../contexts/auth";

// utils
import {setMessage} from "../../utils/set-message";

// components
import {Heading} from "../Heading";
import {PWDRequisite} from "../PWDRequisite";
import {TextComponent} from "../TextComponent";

// styles
import * as Styled from "./styles";

// types
import {Password, User, UserError} from "../../types/user";

export const Signup = () => {
  const {login} = useContext(AuthContext);
  const [data, setData] = useState<User>();
  const [errors, setErrors] = useState<UserError>({
    username: null,
    password: null,
    fullName: null,
    birthDate: null,
    gender: null,
    email: null,
  });
  const [password, setPassword] = useState<Password>({
    password: null,
    confirmPassword: null,
  })

  // Password strength checker
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    isValidPassword: false
  });

  const handleOnKeyUp = (e) => {
    const {value} = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const isValidPassword = capsLetterCheck && numberCheck && pwdLengthCheck;
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      isValidPassword,
    })
  };

  function onChange(ev) {
    const {name, value} = ev.target;
    if (name === "password" || name === "confirmPassword") {
      setPassword({...password, [name]: value})
    } else {
      setData({...data, [name]: value});
    }
    setErrors({...errors, [name]: null})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    data.password = password;
    createUser({onError, onSuccess, data})
  };

  function onSuccess(response: AxiosResponse) {
    if (response.status === 201) {
      login(data.username, data.password.password);
      setMessage(`Olá ${data.username}! Enviamos um e-mail de confirmação para você 😉`, true)
    }
  };

  function onError(errors: AxiosError) {
    const errorValues: UserError = {};
    errors.response.data.errors.forEach((item) => {
      if (item.fieldName === "email") {
        errorValues.email = item.message;
      }
      if (item.fieldName === "fullName") {
        errorValues.fullName = item.message;
      }
      if (item.fieldName === "username") {
        errorValues.username = item.message;
      }
      if (item.fieldName === "password.password") {
        errorValues.password = item.message;
      }
    });
    setErrors(errorValues);
  }

  return (
    <Styled.SignupContainer>
      <Heading size="medium">Crie sua conta</Heading>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>

            <Styled.FormLabel htmlFor="email">E-mail*</Styled.FormLabel>
            <Styled.DivInput hasError={errors.email != null}>
              <Styled.EmailIcon/>
              <Styled.FormInput
                type="email"
                required
                name="email"
                placeholder="E-mail"
                onChange={onChange}
              />
            </Styled.DivInput>
            <Styled.ErrorMessage>{errors.email}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="name">Nome*</Styled.FormLabel>
            <Styled.DivInput hasError={errors.fullName != null}>
              <Styled.Personicon/>
              <Styled.FormInput
                type="text"
                minLength={2}
                maxLength={55}
                required
                name="fullName"
                placeholder="Nome Completo"
                onChange={onChange}
              />
            </Styled.DivInput>
            <Styled.ErrorMessage>{errors.fullName}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="username">Nome de usuário*</Styled.FormLabel>
            <Styled.DivInput hasError={errors.username != null}>
              <Styled.UsernameIcon/>
              <Styled.FormInput
                type="text"
                required
                minLength={2}
                maxLength={16}
                name="username"
                placeholder="Nome de usuário"
                onChange={onChange}
              />
            </Styled.DivInput>
            <Styled.ErrorMessage>{errors.username}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="password">Senha*</Styled.FormLabel>
            <Styled.DivInput
              hasError={errors.password != null}
              borderColor={
                checks.isValidPassword
                  ? `green`
                  : password.password !== null ? `#dc143c` : `#000000`
              }>
              <Styled.PasswordIcon/>
              <Styled.FormInput
                type="password"
                required
                minLength={8}
                maxLength={32}
                name="password"
                placeholder="Senha"
                onChange={onChange}
                onKeyUp={handleOnKeyUp}
                onBlur={() => {
                  setPWDRequisite(false)
                }}
                onFocus={() => {
                  setPWDRequisite(true)
                }}
              />
            </Styled.DivInput>

            <Styled.PWDRequisiteDiv>
              {pwdRequisite ?
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck}
                  numberFlag={checks.numberCheck}
                  lengthFlag={checks.pwdLengthCheck}
                /> : null}
            </Styled.PWDRequisiteDiv>

            <Styled.FormLabel htmlFor="password">Confirme a senha*</Styled.FormLabel>
            <Styled.DivInput
              hasError={errors.password != null}
              borderColor={
                checks.isValidPassword &&
                password.password === password.confirmPassword
                  ? `green`
                  : password.confirmPassword !== null
                    ? `#dc143c`
                    : `#000000`
              }
            >
              <Styled.PasswordIcon/>
              <Styled.FormInput
                type="password"
                required
                minLength={8}
                maxLength={32}
                name="confirmPassword"
                placeholder="Confirme a senha"
                onChange={(e) => {
                  onChange(e);
                  setErrors({...errors, password: null})
                }
                }/>
            </Styled.DivInput>
            <Styled.ErrorMessage>{errors.password}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="date">
              Data de nascimento
            </Styled.FormLabel>
            <Styled.DivInput>
              <Styled.CalendarIcon/>
              <Styled.FormInput type="date" placeholder="dd/mm/aaaa" name="birthDate" onChange={onChange}/>
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="gender">Gênero</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.GenderIcon/>
              <Styled.FormSelect name="gender" onChange={onChange}>
                <Styled.FormOption value={null} selected disabled>Escolha uma opção</Styled.FormOption>
                <Styled.FormOption value="MALE">Masculino</Styled.FormOption>
                <Styled.FormOption value="FEMALE">Feminino</Styled.FormOption>
                <Styled.FormOption value="OTHER">Outro</Styled.FormOption>
              </Styled.FormSelect>
            </Styled.DivInput>

            <Styled.FormButton type="submit">Cadastrar</Styled.FormButton>
            <Styled.DivLinks>
              <Styled.Link to="/signin">
                <TextComponent>Ou faça login</TextComponent>
              </Styled.Link>
            </Styled.DivLinks>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.SignupContainer>
  );
};
