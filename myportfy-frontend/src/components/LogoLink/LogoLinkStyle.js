import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 4% 0 0 0;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 5.5rem;
    }

    @media ${theme.media.lteMedium} {
      -webkit-transform: scale(.9)
    }
  `}
`;