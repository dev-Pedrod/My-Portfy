import styled, { css } from "styled-components";

//assets
import { IoMdKey } from "react-icons/io";

export const ResetContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `}
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 40rem) {
        height: 80%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 48rem) {
        padding: 1rem;
    }
`;

export const Form = styled.form`
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 0 3.2rem 3rem;

    @media screen and (max-width: 48rem) {
        padding: 3.2rem 3.2rem;
  }
`;

export const FormH1 = styled.h1`
${({ theme }) => css`
    font-weight: bold;
    margin-top: 20%;
    margin-bottom: 10%;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
  `}
`;

export const FormLabel = styled.label`
  ${({ theme }) => css`
    text-align: start;
    margin-bottom: 0.8rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`;

export const DivInput = styled.div`
  ${({ theme, hasError }) => css`
    align-items: center;
    display: flex;
    background: ${theme.colors.white};
    margin-bottom: 3rem;
    padding: 1rem 1rem;
    border: 0.2rem solid ${hasError? theme.colors.secondaryColor : theme.colors.black};
    border-radius: 5rem;
    width: 100%;
    height: 60%;
  `}
`;

export const PasswordIcon = styled(IoMdKey)`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
`;

export const FormInput = styled.input`
${({ theme }) => css`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: ${theme.colors.black}
    border-radius: 0 5rem 5rem 0;
    font-size: 2rem;
  `}
`;

export const FormButton = styled.button`
${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    padding: 1.6rem 0;
    border: none;
    border-radius: 5rem;
    color: ${theme.colors.black};
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${theme.colors.primaryColor_II};
    }
  `}
`;
