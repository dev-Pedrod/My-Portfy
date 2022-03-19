import React, { useState } from "react";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";
import * as Styled from "./LoginStyles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  
  return (
    <Styled.LoginContainer>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form>
            <Heading size="small">Faça login em sua conta</Heading>
            <Styled.FormLabel htmlFor="for">Nome de usuário</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.UsernameIcon />
              <Styled.FormInput
                type="text"
                required
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Styled.DivInput>
            <Styled.FormLabel htmlFor="for">Senha</Styled.FormLabel>
            <Styled.DivInput>
              <Styled.PasswordIcon />
              <Styled.FormInput
                type="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Styled.DivInput>
            <Styled.FormButton type="submit">Entrar</Styled.FormButton>
            <Styled.DivLinks>
              <Styled.Link to="/signup">
                <TextComponent>Crie uma conta</TextComponent>
              </Styled.Link>
              <Styled.Link to="/forgot">
                <TextComponent>Esqueci a senha</TextComponent>
              </Styled.Link>
            </Styled.DivLinks>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.LoginContainer>
  );
};
