import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";

// icons
import { IoPersonCircle, IoMailOutline } from "react-icons/io5";
import { IoMdKey, IoMdPerson, IoMdCalendar } from "react-icons/io";
import { GiPerson } from "react-icons/gi";

// components
import { Title } from "../Heading/HeadingStyles";
import { Container as Text } from "../TextComponent/TextStyles";

export const SignupContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    ${Title} {
      text-align: center;
      margin-top: 3rem;
    }

    ${Text} {
      color: ${theme.colors.black};
      text-decoration: underline ${theme.colors.black};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const FormWrap = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

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
    max-width: 40rem;
    height: auto;
    width: 100%;
    display: grid;
    margin: 0 auto;
    padding: 3rem 5rem;

    @media ${theme.media.lteMedium} {
      padding: 3rem 3rem;
    }
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

export const FormSelect = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: ${theme.colors.white}
    color: ${theme.colors.black};
    border-radius: 0 5rem 5rem 0;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const FormOption = styled.option`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const FormButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
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
    margin-top: 0.8rem;
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

export const EmailIcon = styled(IoMailOutline)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;

export const Personicon = styled(IoMdPerson)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;

export const CalendarIcon = styled(IoMdCalendar)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;

export const GenderIcon = styled(GiPerson)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.secondaryColor};
    text-align: center;
    margin-top: -3rem;
    margin-bottom: 1rem;
    padding: 0 2rem;
    margin-bottom: .5rem;
  `}
`;

export const PWDRequisiteDiv = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black}
  `}
`;
