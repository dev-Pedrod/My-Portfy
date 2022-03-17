import styled, { css } from "styled-components";
import { Title } from "../Heading/HeadingStyles";
import { Container as text } from "../TextComponent/TextStyles";

export const Container = styled.div`
  ${({ theme, background, imgStart }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.large};
    grid-template-areas: ${imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media ${theme.media.lteMedium} {
      grid-template-areas: ${imgStart ? `'col1 col1' 'col2 col2'` : `'col2 col2' 'col1 col1'`};;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.white : theme.colors.black};
    }

    ${text} {
      color: ${background ? theme.colors.white : theme.colors.black};
    }
  `}
`;

export const Column1 = styled.div`
  ${({ theme }) => css`
    grid-area: col1;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const Column1Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 45rem;
    padding-bottom: 6rem;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
  `}
`;

export const Column2 = styled.div`
  ${({ theme }) => css`
    grid-area: col2;
  `}
`;

export const Column2Wrapper = styled.div`
    max-width: 55rem;
    height: 100%;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
