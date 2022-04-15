import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/auth";

// components
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

// styles
import * as Styled from "./LoginStyles";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password).catch(function (error) {
      if (error.response.status === 401) {
        return setError("Usuário e/ou senha inválido");
      }
    });
  };

  return (
    <Styled.LoginContainer>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>
            <Heading size="small">Faça login em sua conta</Heading>
            <Styled.FormLabel htmlFor="for">Nome de usuário</Styled.FormLabel>
            <Styled.DivInput hasError={error !== ""}>
              <Styled.UsernameIcon/>
              <Styled.FormInput
                type="text"
                required
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Styled.DivInput>
            <Styled.FormLabel htmlFor="for">Senha</Styled.FormLabel>
            <Styled.DivInput hasError={error !== ""}>
              <Styled.PasswordIcon />
              <Styled.FormInput
                
                type="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Styled.DivInput>
            <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
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
