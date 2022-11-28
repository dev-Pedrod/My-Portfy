import styled, { css } from "styled-components";

export const Line = styled.hr`
  ${({ theme }) => css`
    margin: 2rem 0;
    width: 100%;
    height: .1rem;
    border: none;
    background-color: ${theme.colors.Gray};
  `}
`;
