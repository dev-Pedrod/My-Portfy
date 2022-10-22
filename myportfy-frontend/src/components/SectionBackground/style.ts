import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.ligthGray};
  color: ${theme.colors.white};
`;

export const Container = styled.div<{background: boolean}>`
  ${({ theme, background }) => css`
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
