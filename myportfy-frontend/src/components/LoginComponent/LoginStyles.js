import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";

// icons
import { IoPersonCircle } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";

// components
import { Title } from "../Heading/HeadingStyles";
import { Container as Text } from "../TextComponent/TextStyles";

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    ${Title} {
      margin-bottom: 10%;
      text-align: center;]
    }

    ${Text} {
      color: ${theme.colors.black};
      text-decoration: underline ${theme.colors.black};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.weight.bold};;
    }
  `}
`;

export const FormWrap = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      height: 80%;
    }
  `}
`;

export const FormContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      padding: 1rem;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 400px;
    height: auto;
    width: 100%;
    display: grid;
    margin: 0 auto;
    padding: 3rem 5rem;
  `}
`;

export const FormLabel = styled.label`
  ${({ theme }) => css`
    margin-bottom: 0.8rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`;

export const DivInput = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    background: ${theme.colors.white};
    margin-bottom: 3rem;
    padding: 1rem 1rem;
    border: 0.2rem solid ${theme.colors.black};
    border-radius: 5rem;
    width: 100%;
    height: 60%;
  `}
`;

export const FormInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: ${theme.colors.black};
    border-radius: 0 5rem 5rem 0;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const FormButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    padding: ${theme.spacings.xsmall} 0;
    border: none;
    border-radius: 5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.primaryColor_II};
    }
  `}
`;

export const DivLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 0.5rem;
    justify-content: space-evenly;
  `}
`;

export const Link = styled(LinkR)`
  ${({ theme }) => css`
    text-decoration: none;
    align-items: center;
    text-align: center;
  `}
`;

export const UsernameIcon = styled(IoPersonCircle)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;

export const PasswordIcon = styled(IoMdKey)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;
