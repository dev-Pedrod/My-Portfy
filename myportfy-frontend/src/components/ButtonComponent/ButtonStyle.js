import { Link as LinkR } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(LinkR)`
  ${({ theme, background}) => css`
    border-radius: 5rem;
    background: ${background ? theme.colors.primaryColor : theme.colors.mediumGray };
    white-space: nowrap;
    padding: 1rem 2.2rem;
    margin: .5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${background ? theme.colors.primaryColor_II : theme.colors.Gray };
    }
  `}
`;