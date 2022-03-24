import React, { useState } from "react";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";
import * as Styled from "./SignupStyles";

export const Signup = () => {
  const [data, setData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    birthDate: "",
    gender: "",
  })

  function onChange(ev) {
    const { name, value } = ev.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  }

  return (
    <Styled.SignupContainer>
        <Heading size="medium">Crie sua conta</Heading>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form>
            <Styled.FormLabel htmlFor="for">E-mail*</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.EmailIcon />
              <Styled.FormInput
                type="email"
                required
                name="email"
                placeholder="E-mail"
                onChange={onChange}
              />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="for">Nome*</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.Personicon />
              <Styled.FormInput
                type="text"
                required
                name="fullName"
                placeholder="Nome Completo"
                onChange={onChange}
              />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="for">Nome de usuário*</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.UsernameIcon />
              <Styled.FormInput
                type="text"
                required
                name="username"
                placeholder="Nome de usuário"
                onChange={onChange}
              />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="for">Senha*</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.PasswordIcon />
              <Styled.FormInput
                type="password"
                required
                name="password"
                placeholder="Senha"
                onChange={onChange}
              />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="for">
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
                <Styled.FormOption defaultValue="">Escolha uma opção</Styled.FormOption>
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
