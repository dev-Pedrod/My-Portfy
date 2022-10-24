import {FormEvent, useEffect, useState} from 'react';
import {AxiosError} from "axios";

// styles
import * as Styled from "./styles";

// components
import {TextComponent} from '../TextComponent';

// api
import {forgotPassword} from "../../shared/service/auth.service";

export const Forgot = () => {
  const defaultH1 = "Digite seu email para recuperar sua conta";
  const [error, setError] = useState(null);
  const [data, setData] = useState<string>(null);
  const [h1, setH1] = useState(defaultH1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [seconds, setSeconds] = useState(45);
  const [btnPlaceHolder, setBtnPlaceHolder] = useState("Enviar");
  const [showTimer, setShowTimer] = useState(false);

  const onError = (err: AxiosError) => {
    setError(err.response.data?.message);
    setBtnDisabled(false);
    setH1(defaultH1);
  }

  const onSuccess = () => {
    setH1("Verifique seu email");
    setShowTimer(true);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBtnDisabled(true);
    setError(null)
    setH1("Enviando email...")
    forgotPassword({onError, onSuccess, data}).then();
  };

  // timer
  useEffect(() => {
    if (showTimer) {
      setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          if (seconds <= 40) {
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
  }, [showTimer, seconds]);

  return (
    <Styled.ForgotContainer>
      <Styled.FormWrap>
        <Styled.FormContent>
          <Styled.Form onSubmit={(e) => handleSubmit(e)}>
            <Styled.FormH1>{h1}</Styled.FormH1>
            <Styled.DivInput hasError={error != null}>
              <Styled.EmailIcon/>
              <Styled.FormInput
                type="email"
                required
                placeholder="E-mail"
                name="email"
                onChange={(e) => setData(e.target.value)}
              />
            </Styled.DivInput>

            <Styled.ErrorMessage>{error}</Styled.ErrorMessage>

            <Styled.FormButton type="submit" disabled={btnDisabled} isCursorDisabled={btnDisabled}>
              {btnPlaceHolder}
            </Styled.FormButton>

            {showMessage &&
              <>
                <TextComponent>Não recebeu o e-mail? 😨</TextComponent>
                {seconds !== 0 ?
                  <Styled.TextTimer>Solicite outro em: {seconds} segundos</Styled.TextTimer>
                  :
                  <Styled.TextTimer>Você já pode solicitar outro email !</Styled.TextTimer>
                }
              </>
            }
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.ForgotContainer>
  )
}
