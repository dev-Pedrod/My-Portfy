import styled, { css } from "styled-components";

// components 
import { Button } from "../ButtonComponent/ButtonStyle"

// icons
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: .1rem solid ${theme.colors.Gray};
    border-radius: 1rem;
    max-height: 300rem;
    width: 100%;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    margin-bottom: ${theme.spacings.small};

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

export const Texts = styled.span`
  ${({ theme, capitalize }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    width: auto;
    height: auto;
    cursor: default;
    text-transform: ${capitalize? 'capitalize': ''};
  `}
`;

export const AuthorDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 6rem;
    width: 100%;
    z-index: 1;
    background: ${theme.colors.white};
    border-bottom: .1rem solid ${theme.colors.Gray};

    @media ${theme.media.lteMedium} {
        margin-bottom: 1rem;
    }
  `}
`;

export const AuthorContentDiv = styled.div`
  ${({ theme }) => css`
    display: block;
    grid-area: auto;
    height: 6rem;
    width: 70%;
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
    z-index: 1;
    background: ${theme.colors.white};
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 1rem 0;
  `}
`;

export const H2 = styled.h2`
  ${({ theme, capitalize }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: .1rem;
    text-transform: ${capitalize? 'capitalize': ''};
    cursor: default;
  `}
`;

export const BottomDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: 0 1rem 0 1rem;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.darkGray};
    z-index: 1;
    margin-top: 1rem;
    border-top: .1rem solid ${theme.colors.Gray};
    background: ${theme.colors.white};
  `}
`;