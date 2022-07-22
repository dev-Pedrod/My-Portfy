import { useState } from 'react';

// styles
import * as Styled from "./ForgotStyles";

// api
import { api } from "../../api/api";

export const Forgot = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [h1, setH1] = useState("Digite seu email para recuperar a sua conta");
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setError(null)
    setH1("Enviando email...")
    api.post(`/auth/forgot-password?email=${email}`).catch((errors) => {
        if (errors.response.status !== 200) {
            setError(errors.response.data.message);
            setDisabled(false);
            setH1("Digite seu email para recuperar a sua conta")
        } 
    }).then((response) => {
        if (response.status === 200){
          setH1("Verifique seu email!");
        }
    });
  };
  
  return (
    <Styled.ForgotContainer>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormH1>{h1}</Styled.FormH1>
            <Styled.DivInput hasError={error != null}>
              <Styled.EmailIcon />
              <Styled.FormInput
                type="email"
                required
                placeholder="E-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Styled.DivInput>

            <Styled.ErrorMessage>{error}</Styled.ErrorMessage>

            <Styled.FormButton type="submit" disabled={isDisabled}>
              Enviar
            </Styled.FormButton>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.ForgotContainer>
  )
}
