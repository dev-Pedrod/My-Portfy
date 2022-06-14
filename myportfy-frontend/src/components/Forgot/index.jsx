import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// styles
import * as Styled from "./ForgotStyles";

// api
import { api } from '../../api';

export const Forgot = () => {
  const navigate = useNavigate();
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
            navigate("/reset-password");
        }
    });
  };
  
  return (
    <Styled.ForgotContainer>
      <Styled.FormWrap>
        <Styled.LinkArrow to="/signin">
          <Styled.ArrowBackIcon />
        </Styled.LinkArrow>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormH1>{h1}</Styled.FormH1>
            <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
            <Styled.DivInput hasError={error != null}>
              <Styled.EmailIcon />
              <Styled.FormInput
                type="email"
                required
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Styled.DivInput>
            <Styled.FormButton type="submit" disabled={isDisabled}>
              Enviar
            </Styled.FormButton>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.ForgotContainer>
  )
}
