import styled, {css} from 'styled-components';

// icons
import {BiAddToQueue} from 'react-icons/bi'

// components
import { Container as Text } from "../../../../components/TextComponent/styles";

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.darkGray};
    height: 10rem;
    background-color: ${theme.colors.white};
    width: 100%;
    border: .2rem dashed ${theme.colors.Gray};
    transition: 0.3s ease-in-out;
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  `}
`;

export const IconDiv = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: auto;
    height: 8rem;
    color: ${theme.colors.Gray};
    font-size: 4rem;
    transition: 0.2s all ease-in-out;

    ${Text} {
      font-size: ${theme.font.sizes.xsmall};
    }

    &:hover{
      color: ${theme.colors.darkGray};
      font-size: 4.5rem;
    }

    @media ${theme.media.lteMedium} {
      font-size: 3rem;

      &:hover{
        color: ${theme.colors.darkGray};
        font-size: 3.5rem;
      }
    }
  `}
`;

export const IconAdd = styled(BiAddToQueue)`
  ${({theme}) => css`
    color: inherit;
    font-size: inherit;
  `}
`;
