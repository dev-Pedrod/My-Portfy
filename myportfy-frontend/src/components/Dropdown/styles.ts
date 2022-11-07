import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  ${({theme, isOpen}) => css`
    opacity: ${isOpen ? "100%" : "0"};
    top: 6.5rem;
    transition: opacity 75ms linear, transform 75ms ease-out;
    z-index: 10;
    right: 0;
    box-sizing: border-box;
    display: ${isOpen ? "flex" : "none"};;
    flex-direction: column;
    white-space: nowrap;
    height: 19.8rem;
    width: 23rem;
    border-radius: .4rem;
    box-shadow: 0 0 .5rem .1rem ${theme.colors.Gray};
    position: absolute;
    background-color: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const DivArrow = styled.div`
  ${({theme}) => css`
    transform: rotate(45deg);
    top: -.8rem;
    right: 3.9rem;
    display: flex;
    height: 1.8rem;
    width: 1.8rem;
    box-shadow: -2px -2px 2px -.3px ${theme.colors.Gray};
    position: absolute;
    background-color: inherit;
  `}
`;

export const DivWrap = styled.div`
  ${({theme}) => css`
    background: inherit;
    border-radius: .6rem;
    height: 100%;
    position: relative;
    width: 100%;
  `}
`;

export const LinkOptions = styled(Link)`
  ${({theme}) => css`
    display: flex;
    text-decoration: none;
    color: ${theme.colors.black};
    align-items: center;
    height: 25%;
    position: relative;
    width: 100%;
  `}
`;

export const DivOptions = styled.div`
  ${({theme}) => css`
    display: flex;
    color: ${theme.colors.black};
    align-items: center;
    height: 100%;
    position: relative;
    width: 100%;

    &:hover {
      background: #f8f8f8;
    }
  `}
`;

export const DivIcon = styled.div`
  ${({theme}) => css`
    display: flex;
    color: ${theme.colors.black};
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    width: 25%;

    * {
      font-size: 2.5rem;
    }
  `}
`;

export const DivText = styled.div`
  ${({theme}) => css`
    display: flex;
    color: ${theme.colors.black};
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    position: relative;
    width: 100%;
    padding: 1rem 1rem 1rem 0;
  `}
`;

export const P = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
