import styled, { css } from 'styled-components';

// icons
import { FaTrash } from "react-icons/fa";

export const Overlay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 98;
    cursor: default;
  `}
`;

export const OptionsDiv = styled.div`
  ${({ theme }) => css`
    position: fixed;
    max-height: 44rem;
    overflow: hidden;
    background-color: ${theme.colors.white};
    border-radius: 1.5rem;
    width: auto;
    top: 7rem; 
    left: 33%;
    z-index: 99;
    box-shadow: 0 0 1em rgba(0,0,0,.3);

    @media screen and (max-width: 968px) {
        width: 100%;
        left: 0;
    }
  `}
`;

export const Options = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: .5rem 1rem;
    height: auto;
    max-height: 40rem;
    width: auto;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    
    @media ${theme.media.lteMedium} {
        gap: .5rem;
    }
  `}
`;

export const PropsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 1rem;
    max-height: 34rem;
    overflow-y: scroll;

    @media screen and (max-width: 968px) {
        width: 100%;
        left: 0;
    }
  `}
`;

export const PropsWrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: auto;
    flex-direction: row;
    width: auto;
  `}
`;

export const DivProps = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 20rem;
    gap: .5rem;
    justify-content: space-between;

    @media ${theme.media.lteMedium}{
        padding-top: 1rem;
        width: 18rem;
    }
  `}
`;

export const ColorPicker = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    max-width: 20rem;
    height: 30.5rem;
    padding: .5rem 1rem;
    
    @media screen and (max-width: 968px){
        max-width: none;
        padding-left: .5rem;
        width: auto;
        height: auto;
    }
  `}
`;

export const ColorDiv = styled.div`
  ${({ theme, color }) => css`
    width: 1.8rem;
    height: 1.8rem;
  `}
`;

export const Color = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${color};
    border: .1rem solid ${theme.colors.Gray};
    border-radius: .2rem;
  `}
`;

export const Labels = styled.label`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    font-weight: bold;

    @media ${theme.media.lteMedium} {
        font-size: ${theme.font.sizes.xxsmall};
    }
  `}
`;

export const CheckboxDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: auto;
  `}
`;

export const Inputs = styled.input`
  ${({ theme, widthAuto }) => css`
    outline: none;
    display: flex;
    border: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    width: ${widthAuto? 'auto' : '100%'};
    height: auto;
  `}
`;

export const Select = styled.select`
  ${({ theme, widthAuto }) => css`
    outline: none;
    display: flex;
    border: none;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    width: ${widthAuto? 'auto' : '100%'};
    height: auto;
  `}
`;

export const SelctOptions = styled.option`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    z-index: 10;
    align-items: center;
    padding: .5rem 1rem;
    border-top: 1px solid ${theme.colors.Gray};
    display: flex;
    justify-content: flex-end;
  `}
`;

export const InputButton = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.xsmall};
    height: 100%;
    padding: .6rem 1rem;
    transition: all .5s;
    width: auto;

    &:hover {
      background: ${theme.colors.Gray};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme, borderTop, secondHeader,   }) => css`
    align-items: center;
    border-top: ${borderTop? `.1rem solid ${theme.colors.Gray}`: 'none' };
    border-bottom: .1rem solid ${theme.colors.Gray};
    display: flex;
    height: ${secondHeader? '3rem' : '5rem'};
    justify-content: ${secondHeader? 'center' : 'space-between'};
    padding: 1rem;
  `}
`;

export const AddImageInput = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.darkGray}; 
    
    ::before{
      content: 'Definir logo';
      text-decoration: underline;
      display: inline-block;
      padding: .5rem .8rem;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
    }

    ::-webkit-file-upload-button {
      visibility: hidden;
    }
  `}
`;

export const DivIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    height: auto;
    width: auto;
  `}
`;

export const ImageTrash = styled(FaTrash)`
  ${({ theme }) => css`
    height: auto;
    width: auto;
    transition: all .5s;
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  `}
`;