import styled, { css } from "styled-components";

export const LogoDiv = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    z-index: 9;
    margin-top: -3rem;
    padding: 1rem;
    position: sticky;

    @media ${theme.media.lteMedium} {
      height: 3rem;
      margin-top: -.5rem;
      margin-bottom: -3rem;
    }
  `}
`;
