import styled, { css } from "styled-components";

// components 
import { Container as Text } from "../TextComponent/TextStyles";

// icons
import { IoCloseCircle } from "react-icons/io5";
import { BsCardImage } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

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
    width: 55rem;
    z-index: 99;
    left: 28%;
    top: 4rem;

    @media ${theme.media.lteMedium} {
        width: 100%;
        left: 0;
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
  `}
`;

export const UserDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;

    ${Text} {
      margin-top: .2rem;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      text-transform: capitalize ;
    }
  `}
`;

export const AuthorImage = styled.img`
  ${({ theme }) => css`
    height: 8rem;
    width: 8rem;
    margin-top: 1.5rem;
    border-radius: 5rem;
  `}
`;

export const TopDiv = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    padding: 0rem 2rem;
  `}
`;

export const PostTopDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: start;
    padding-left: 3rem;
  `}
`;

export const PostForm = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 1rem 2rem 2rem 2rem;
    cursor: default;
    border-radius: 0 0 1.5rem 1.5rem;
  `}
`;

export const FormLabel = styled.label`
  ${({ theme }) => css`
    margin-bottom: .1rem;
    margin-top: .8rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
  `}
`;

export const Inputs = styled.input`
  ${({ theme }) => css`
    border: .1rem solid ${theme.colors.Gray};
    border-radius: .5rem;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    height: 3.5rem;
    width: 100%;
    outline: none;
    padding-left: .7rem;
  `}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    padding-top: 1rem;
    border: 0;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    height: 23rem;
    outline: 0;
    resize: none;
    width: 100%;

    @media ${theme.media.lteMedium} {
      max-height: 25rem;
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.secondaryColor};
    text-align: center;
    margin-bottom: 1rem;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `}
`;

export const AddImageDiv = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 17rem;
  `}
`;

export const AddImageBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    border: none;
    border-radius: 5rem;
    outline: none;
    cursor: pointer;
    background: ${theme.colors.white};
    height: 100%;
    padding: 1rem 1rem;
    transition: all .5s;
    width: auto;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xxsmall};
    justify-content: center;
    align-items: center;
    gap: .5rem;
    text-decoration: underline ;
  `}
`;

export const AddImageInput = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    height: 6rem;
    opacity: 0;
    position: absolute;
    width: 16rem;
  `}
`;

export const AddImage = styled(BsCardImage)`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
  `}
`;

export const InputButton = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    background: ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.xsmall};
    height: 100%;
    padding: .8rem 1rem;
    transition: all .5s;
    width: auto;

    &:hover {
      background: ${theme.colors.Gray};
    }
  `}
`;

export const ImagePreviewDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: default;
    height: 5rem;
    padding: .5rem;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border: 1px dashed gray;
    margin-bottom: .5rem;
  `}
`;

export const ImagePreview = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: auto;
  `}
`;

export const ImageTrash = styled(FaTrash)`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
    transition: all .5s;
    cursor: pointer;
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  `}
`;