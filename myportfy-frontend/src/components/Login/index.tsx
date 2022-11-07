import React, {useContext, useState} from "react";
import {AxiosError} from "axios";

// contexts
import {AuthContext} from "../../contexts/auth";

// components
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

// styles
import * as Styled from "./styles";

export const Login = () => {
  const {login} = useContext(AuthContext);
  const [username, setUsername] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [error, setError] = useState<string>(null);

  const onError = (error: AxiosError) => {
    if (error.response.status === 401) {
      return setError("Usuário e/ou senha inválido.");
    } else {
      return setError("Ops! houve um problema ao fazer login 😬");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, onError);
  };

  return (
    <Styled.LoginContainer>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>
            <Heading size="small">Faça login em sua conta</Heading>

            <Styled.FormLabel htmlFor="username">Nome de usuário</Styled.FormLabel>
            <Styled.DivInput hasError={error !== null}>
              <Styled.UsernameIcon/>
              <Styled.FormInput
                type="text"
                required
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setError(null)
                }}
              />
            </Styled.DivInput>

            <Styled.FormLabel htmlFor="password">Senha</Styled.FormLabel>
            <Styled.DivInput hasError={error !== null}>
              <Styled.PasswordIcon/>
              <Styled.FormInput
                type="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(null)
                }}
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
