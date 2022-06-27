import React, { useContext, useState } from "react";

// api
import { api } from "../../api/api";

// contexts
import { AuthContext } from "../../contexts/auth";

// components
import { Heading } from "../Heading";
import { PWDRequisite } from "../PWDRequisiteComponent";
import { TextComponent } from "../TextComponent";

// styles
import * as Styled from "./SignupStyles";

export const Signup = () => {
  const { login } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    birthDate: null,
    gender: null,
  });

  // Password strength checker
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false
  });

  const handleOnKeyUp = (e) => {
      const { value } = e.target;
      const capsLetterCheck = /[A-Z]/.test(value);
      const numberCheck = /[0-9]/.test(value);
      const pwdLengthCheck = value.length >= 8;
      setChecks({
        capsLetterCheck,
        numberCheck,
        pwdLengthCheck,
      })
  };

  const handleOnFocus = () => {
    setPWDRequisite(true);
  };

  const handleOnBlur = () => {
    setPWDRequisite(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    api.post("/users", data).catch((error) => {
      if (error.response.status !== 201 ) {
        onError(error.response.data.errors);
      }
    }).then((response) => {
        if(response.status === 201) {
          login(data.username, data.password);
        }
      });
  };

  function onChange(ev) {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  }

  function onError(values) {
    const errorValues = {}
    values.forEach((item) => {
      if(item.fieldName === "email"){
        errorValues.email = item.message;
      }
      if(item.fieldName === "fullName"){
        errorValues.fullName = item.message;
      }
      if(item.fieldName === "username"){
        errorValues.username = item.message;
      }
      if(item.fieldName === "password"){
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
              <Styled.EmailIcon />
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
              <Styled.Personicon />
              <Styled.FormInput
                type="text"
                minLength={2}
                maxLength={255}
                required
                name="fullName"
                placeholder="Nome Completo"
                onChange={onChange}
              />
            </Styled.DivInput>
            <Styled.ErrorMessage>{errors.fullName}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="username">Nome de usuário*</Styled.FormLabel>
            <Styled.DivInput hasError={errors.username != null}>
              <Styled.UsernameIcon />
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
            <Styled.DivInput hasError={errors.password != null}>
              <Styled.PasswordIcon />
              <Styled.FormInput
                type="password"
                required
                minLength={8}
                maxLength={32}
                name="password"
                placeholder="Senha"
                onChange={onChange}
                onKeyUp={handleOnKeyUp}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
              />
            </Styled.DivInput>

            <Styled.PWDRequisiteDiv>
            {pwdRequisite ? 
              <PWDRequisite 
                capsLetterFlag={checks.capsLetterCheck ? true : false}
                numberFlag={checks.numberCheck ? true : false}
                lengthFlag={checks.pwdLengthCheck ? true : false}
                /> : null}
            </Styled.PWDRequisiteDiv>

            <Styled.ErrorMessage>{errors.password}</Styled.ErrorMessage>

            <Styled.FormLabel htmlFor="date">
              Data de nascimento
            </Styled.FormLabel>
            <Styled.DivInput>
              <Styled.CalendarIcon />
              <Styled.FormInput type="date" name="birthDate" onChange={onChange} />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="for">Gênero</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.GenderIcon />
              <Styled.FormSelect type="select" name="gender" onChange={onChange}>
                <Styled.FormOption defaultValue={null}>Escolha uma opção</Styled.FormOption>
                <Styled.FormOption value="MALE">Masculino</Styled.FormOption>
                <Styled.FormOption value="FEMALE">Feminino</Styled.FormOption>
                <Styled.FormOption value="OTHER">Outro</Styled.FormOption>
              </Styled.FormSelect>
            </Styled.DivInput>

            <Styled.FormButton type="submit">Cadastrar</Styled.FormButton>
            <Styled.DivLinks>
              <Styled.Link to="/signin">
                <TextComponent >Ou faça login</TextComponent>
              </Styled.Link>
            </Styled.DivLinks>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.SignupContainer>
  );
};
