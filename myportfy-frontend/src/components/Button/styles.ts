import styled, {css} from "styled-components";

// react libs
import {Link as LinkR} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';

export const ButtonLink = styled(LinkR)<{ background: boolean }>`
  ${({theme, background}) => css`
    border-radius: 5rem;
    background: ${background ? theme.colors.primaryColor : theme.colors.mediumGray};
    white-space: nowrap;
    padding: 1rem 2.2rem;
    margin: .5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${background ? theme.colors.primaryColor_II : theme.colors.Gray};
    }
  `}
`;

export const ButtonScroll = styled(Scroll)<{ background: boolean }>`
  ${({theme, background}) => css`
    border-radius: 5rem;
    background: ${background ? theme.colors.primaryColor : theme.colors.mediumGray};
    white-space: nowrap;
    padding: 1rem 2.2rem;
    margin: .5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${background ? theme.colors.primaryColor_II : theme.colors.Gray};
    }
  `}
`;

export const Button = styled.button<{ background: boolean }>`
  ${({theme, background}) => css`
    border-radius: 5rem;
    background: ${background ? theme.colors.primaryColor : theme.colors.mediumGray};
    white-space: nowrap;
    padding: 1rem 2.2rem;
    margin: .5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${background ? theme.colors.primaryColor_II : theme.colors.Gray};
    }
  `}
`;
