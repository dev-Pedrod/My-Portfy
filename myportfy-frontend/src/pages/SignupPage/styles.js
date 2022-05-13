import styled, { css } from "styled-components";

export const LogoDiv = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    z-index: 9;
    margin-top: -2rem;
    position: fixed;

    @media ${theme.media.lteMedium} {
      position: sticky;
      height: 3rem;
      margin-top: -.5rem;
      margin-bottom: 4rem;
      margin-left: -1rem;
    }
  `}
`;