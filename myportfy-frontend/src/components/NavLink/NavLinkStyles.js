import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
    position: relative;

    &:hover {
        border-bottom: 3px solid ${theme.colors.primaryColor};
        transition: all 0.1s ease-in-out;
    }

    &:focus {
        border-bottom: 3px solid ${theme.colors.primaryColor};
    }
  `}
`;