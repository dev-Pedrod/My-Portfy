import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";

// icons
import { FaTimes } from "react-icons/fa";

// components
import {ButtonLink} from "../../Button/styles";


export const SidebarContainer = styled.aside<{isOpen: boolean}>`
  ${({ theme,isOpen }) => css`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    opacity: ${ isOpen ? "100%" : "0"};
    top: ${isOpen ? "0" : "-100%"};

    ${ButtonLink} {
      width: 15rem;
      padding: 1.5rem;
      font-size: ${theme.font.sizes.small};
      text-align: center;
    }

    @media (min-width: 768.1px) {
        display: none;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
  `}
`;

export const CloseIcon = styled(FaTimes)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const SidebarWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8rem);
  text-align: center;

  @media screen and (max-width: 48rem) {
    grid-template-rows: repeat(6, 6rem);
  }
`;

export const SidebarLink = styled(LinkR)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    font-size: 2rem;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 8rem;
    color: ${theme.colors.black};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primaryColor_II};
      transition: 0.2 ease-in-out;
    }
  `}
`;

export const SideBtnWrap = styled.div`
  display: grid;
  justify-content: center;
`;
