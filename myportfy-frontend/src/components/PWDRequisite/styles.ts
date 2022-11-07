import styled, { css } from "styled-components";

export const PWDContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin-top: -2.5rem;
    margin-bottom: 2.5rem;
    margin-left: 2rem;
    text-align: start;
  `}
`;

export const Flags = styled.li<{isValid: boolean}>`
  ${({ theme, isValid }) => css`
    margin-bottom: .5rem;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xxsmall};
    color: ${isValid ? "green" : theme.colors.secondaryColor};
  `}
`;
