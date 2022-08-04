import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 4% 0 0 0;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 6rem;
    }

    @media ${theme.media.lteMedium} {
      -webkit-transform: scale(.9)
    }
  `}
`;