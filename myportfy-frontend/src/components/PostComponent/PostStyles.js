import styled, { css } from "styled-components";

// components 
import { Button } from "../ButtonComponent/ButtonStyle"

// icons
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { MdEdit } from "react-icons/md";


export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: .1rem solid ${theme.colors.Gray};
    border-radius: .5rem;
    max-height: 300rem;
    width: 100%;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    margin-bottom: ${theme.spacings.small};
    cursor: default;

    ${Button} {
      @media ${theme.media.lteMedium} {
        padding: 1rem 1rem;
      }
    }
  `}
`;

export const ShowMore = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.darkGray};
    background: none;
    border: none;
    margin-left: .8rem;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      color: #004b7c;
      border-bottom:1px solid #004b7c;
    }
  `}
`;

export const Texts = styled.p`
  ${({ theme, capitalize, fontSmall }) => css`
    font-size: ${fontSmall? theme.font.sizes.xxsmall : theme.font.sizes.xsmall};
    word-wrap: break-word;
    width: auto;
    height: auto;
    cursor: default;
    white-space: pre-line;
    text-transform: ${capitalize ? 'capitalize' : ''};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 6rem;
    width: 100%;
    z-index: 9;
    background: ${theme.colors.white};
    border-bottom: .1rem solid ${theme.colors.Gray};

    @media ${theme.media.lteMedium} {
        margin-bottom: 1rem;
    }
  `}
`;

export const PostOptionsDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 1.8rem;
    width: auto;
    background: ${theme.colors.white};
    cursor: pointer;
  `}
`;

export const PostOptionsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: opacity 75ms linear, transform 75ms ease-out, top none;
    z-index: 99;
    display: ${({ isOpen }) => (isOpen ? `flex` : `none`)};
    flex-direction: column;
    white-space: nowrap;
    height: auto;
    width: auto;
    border-radius: .5rem;
    border: .1rem solid ${theme.colors.Gray};
    background-color: ${theme.colors.white};
    position: absolute;
  `}
`;

export const DivText = styled.div`
${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    position: relative;
    width: 100%;
    padding: .5rem;
  `}
`;

export const DivOptions = styled.div`
${({ theme }) => css`
    display: flex;
    border-radius: .4rem;
    color: ${theme.colors.black};
    align-items: center;
    height: 5rem;
    position: relative;
    width: auto;
    padding: 0 .5rem 0 .5rem;

    &:hover{
        background: #f8f8f8;
    }
  `}
`;

export const DivIcon = styled.div`
${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    width: 25%;
    margin-left: .2rem;
    
    *{
        font-size: 2rem;
    }
  `}
`;

export const AuthorContentDiv = styled.div`
  ${({ theme }) => css`
    display: block;
    grid-area: auto;
    height: 6rem;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

export const AuthorName = styled.span`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xsmall};
    cursor: default;
  `}
`;

export const AuthorImage = styled.img`
  ${({ theme }) => css`
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 5rem;
    cursor: pointer;
  `}
`;

export const ImageDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-height: 80rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-top: 1rem;
    
    @media ${theme.media.lteMedium} {
        max-height: 35rem;
    }
  `}
`;

export const PostImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    max-height: 50rem;
    object-fit: contain;
    cursor: pointer;

    @media screen and (max-width: 990px) {
        width: 80%;
        height: 80%;
    }

    @media ${theme.media.lteMedium} {
        width: 100%;
        max-height: 35rem;
        height: 100%;
    }
  `}
`;

export const PostContent = styled.div`
  ${({ theme }) => css`
    display: block;
    max-height: auto;
    background: ${theme.colors.white};
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 1rem 0;
  `}
`;

export const H2 = styled.h2`
  ${({ theme, capitalize, margin }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${margin? (theme.spacings.xxsmall) : `0`};
    word-wrap: break-word;
    cursor: inherit;
    ::first-letter {
      text-transform ${capitalize ? 'capitalize' : ''}
    }
  `}
`;

export const BottomDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.darkGray};
    z-index: 1;
    margin-top: 1rem;
    border-top: .1rem solid ${theme.colors.Gray};
    background: ${theme.colors.white};
  `}
`;

export const BoostDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    color: ${theme.colors.darkGray};
    background: ${theme.colors.white};
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.mediumGray};
    }
  `}
`;

export const LightningFill = styled(BsLightningChargeFill)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      color: orange;
      margin-right: .5rem;
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
  `}
`;

export const Lightning = styled(BsLightningCharge)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      margin-right: .5rem;
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
  `}
`;

export const PencilIcon = styled(MdEdit)`
  ${({ theme }) => css`
      display: inline-block;
      font-size: 1.4rem;
      position: relative;
  `}
`;

export const EditSpan = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin-top: -.3rem;
    word-wrap: break-word;
    width: auto;
    height: auto;
    white-space: pre-line;
  `}
`;