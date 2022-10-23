import styled, { css } from "styled-components";

// icons
import { IoCloseCircle } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai"
import { MdCancel } from "react-icons/md"

export const Overlay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,.6);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 98;
    overflow: visible;
    cursor: default;
  `}
`;

export const ContainerModal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.white};
    border-radius: 1.5rem;
    width: 53rem;
    z-index: 99;
    top: 6.5rem;

    @media ${theme.media.lteMedium} {
        width: 100%;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    border-bottom: .1rem solid ${theme.colors.Gray};
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding: 0 1rem;
  `}
`;

export const HeaderBtn = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: 0;
    border: 0;
    border-radius: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: 0;
    transition: .2s;
    width: 2.5rem;
    cursor: pointer;
  `}
`;

export const CloseIcon = styled(IoCloseCircle)`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    cursor: pointer;
  `}
`;

export const TopDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
  `}
`;

export const Texts = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    word-wrap: break-word;
    width: auto;
    height: auto;
    cursor: default;
    white-space: pre-line;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: .5rem 1rem;
    border-top: .1rem solid ${theme.colors.Gray};
    align-items: center;
    display: flex;
    justify-content: flex-end;
  `}
`;

export const Confirm = styled(AiFillCheckCircle)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primaryColor_II};
    height: 100%;
    width: 2.8rem;
    cursor: pointer;
  `}
`;

export const Cancel = styled(MdCancel)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.secondaryColor};
    height: 100%;
    width: 2.8rem;
    margin: 0 .5rem;
    cursor: pointer;
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondaryColor};
    text-align: center;
    margin-bottom: 1rem;
  `}
`;