import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    margin-top: -6rem;
    background: ${theme.colors.ligthGray};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;