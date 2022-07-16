import styled, { css } from "styled-components";

// components
import { Container as Text } from "../TextComponent/TextStyles";
import { Title } from "../Heading/HeadingStyles";

export const ServiceContainer = styled.div`
  ${({ theme }) => css`
    margin-top: -30rem;
    margin-bottom: -15rem;
    height: 78rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};

    ${Text} {
      font-size: 1.6rem;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};

      @media ${theme.media.lteMedium} {
        font-size: ${theme.font.sizes.large};
      }
    }

    @media ${theme.media.lteMedium} {
        height: 130.8rem;
        margin-top: -10rem;
        margin-bottom: -10rem;
    }

    @media screen and (max-width: 100rem) {
        margin-top: -20rem;
    }
  `}
`;

export const ServicesWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 108rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1.6rem;
    padding: 0 5rem;

    @media ${theme.media.lteMedium} {
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }
  `}
`;

export const ServicesCard = styled.div`
  ${({ theme }) => css`
    box-shadow: .2rem .2rem .2rem ${theme.colors.Gray};
    background: ${theme.colors.ligthGray};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1rem;
    max-height: 34rem;
    padding: 3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
  `}
`;

export const ServicesIcon = styled.img`
  ${({ theme }) => css`
    height: 16rem;
    width: 16rem;
    margin-bottom: 1rem;
  `}
`;

export const ServicesH2 = styled.h2`
  ${({ theme }) => css`
    font-size: 1.8rem;
    margin-bottom: 10px;
  `}
`;