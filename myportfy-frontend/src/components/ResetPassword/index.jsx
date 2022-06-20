import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// api
import { api } from "../../api/api";

// components
import { PWDRequisite } from "../PWDRequisiteComponent";
import { ErrorMessage, PWDRequisiteDiv } from "../SignupComponent/SignupStyles";

// styles
import * as Styled from "./UpdatePasswordStyles";

export const ResetpPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [errors, setErrors] = useState(null);
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/users/reset-password?token=${token}`, values).catch((error) => {
      if (error.response.status === 422 || error.response.status !== 200 ) {
        setErrors(error.response.data.message);
      }
    }).then((response) => {
      if(response.status === 200){
        navigate("/signin");
    }})
  };

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

  return (
    <Styled.ResetContainer>
      <Styled.FormWrap>
        <Styled.LinkArrow to="/forgot">
          <Styled.ArrowBackIcon />
        </Styled.LinkArrow>
        <Styled.FormContent>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormH1>Crie uma nova senha</Styled.FormH1>
            <Styled.FormLabel htmlFor="password">Senha</Styled.FormLabel>
            <Styled.DivInput hasError={errors != null}>
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

            <PWDRequisiteDiv>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? true : false}
                  numberFlag={checks.numberCheck ? true : false}
                  lengthFlag={checks.pwdLengthCheck ? true : false}
                />
              ) : null}
            </PWDRequisiteDiv>

            <Styled.FormLabel htmlFor="password">Confirme a senha</Styled.FormLabel>
            <Styled.DivInput hasError={errors != null}>
              <Styled.PasswordIcon />
              <Styled.FormInput
                type="password"
                placeholder="Senha"
                name="confirmPassword"
                required
                minLength={8}
                maxLength={32}
                onChange={onChange}
              />
            </Styled.DivInput>

            <ErrorMessage>{errors}</ErrorMessage>

            <Styled.FormButton type="submit">Enviar</Styled.FormButton>
          </Styled.Form>
        </Styled.FormContent>
      </Styled.FormWrap>
    </Styled.ResetContainer>
  );
};
