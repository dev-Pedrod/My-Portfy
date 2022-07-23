import { useEffect, useState } from 'react';

// styles
import * as Styled from "./ForgotStyles";

// components
import { TextComponent } from '../TextComponent';

// api
import { api } from "../../api/api";

export const Forgot = () => {
  var defaultH1 = "Digite seu email para recuperar a sua conta";

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [h1, setH1] = useState(defaultH1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [seconds, setSeconds] = useState(45);
  const [btnPlaceHolder, setBtnPlaceHolder] = useState("Enviar");
  const [showTimer, setShowTimer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    setError(null)
    setH1("Enviando email...")
    api.post(`/auth/forgot-password?email=${email}`).catch((errors) => {
        if (errors.response.status !== 200) {
            setError(errors.response.data.message);
            setBtnDisabled(false);
            setH1(defaultH1);
        } 
    }).then((response) => {
        if (response.status === 200){
          setH1("Verifique seu email");
          setShowTimer(true);
        }
    });
  };

  useEffect(() =>{
    if(showTimer){
      setTimeout(() => {
        if(seconds > 0) {
          setSeconds(seconds-1);
          if(seconds <= 35){
            setShowMessage(true)
          }
        } else { 
            setShowTimer(false);
            setBtnDisabled(false)
            setSeconds(45);
            setShowMessage(false);
            setH1("Você pode solitar outro e-mail !")
            setBtnPlaceHolder("Solicitar outro");
          }
      }, 1000);
    }
  });
  
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

            <Styled.FormButton type="submit" disabled={btnDisabled}>
              {btnPlaceHolder}
            </Styled.FormButton>

            {showMessage? 
            <>
            <TextComponent>Não recebeu o e-mail? 😨</TextComponent>
            {seconds !== 0?
            <Styled.TextTimer>Solicite outro em: {seconds} segundos</Styled.TextTimer>
            : 
            <Styled.TextTimer>Você já pode solicitar outro email !</Styled.TextTimer>
            }
            </>
            :
            <></>
            }

          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.ForgotContainer>
  )
}
