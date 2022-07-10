import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: .1rem solid ${theme.colors.Gray};
    border-radius: 1rem;
    max-height: 80rem;
    width: 100%;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    margin-bottom: ${theme.spacings.small};
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
    width: 100%;
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
    margin-right: 1rem;
    cursor: pointer;
  `}
`;

export const ImageDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem 0 0 0;
    max-height: 39rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 1rem 0 0 0;
    
    @media ${theme.media.lteMedium} {
        margin: 0;
        padding: 0;
    }
  `}
`;

export const PostImage = styled.img`
  ${({ theme }) => css`
    width: 90%;
    height: auto;
    max-height: 50rem;
    object-fit: contain;
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 990px) {
        width: 80%;
        height: 80%;
    }

    @media ${theme.media.lteMedium} {
        width: 75%;
        height: 75%;
    }
  `}
`;

export const PostContent = styled.div`
  ${({ theme }) => css`
    display: block;
    max-height: 30rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 1rem;
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
  `}
`;

