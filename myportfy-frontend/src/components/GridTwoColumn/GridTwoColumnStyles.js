import styled, { css } from "styled-components";

// components
import { Title } from "../Heading/HeadingStyles";
import { Container as Text } from "../TextComponent/TextStyles";

export const Container = styled.div`
  ${({ theme, imgStart }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    margin-top: -5rem;
    justify-content: center;
    gap: ${theme.spacings.large};
    grid-template-areas: ${imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media ${theme.media.lteMedium} {
      grid-template-areas: ${imgStart ? `'col1 col1' 'col2 col2'` : `'col2 col2' 'col1 col1'`};
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${theme.colors.black};
    }

    ${Text} {
      color: ${theme.colors.black};
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
    max-width: 50rem;

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
    max-width: 65rem;
    height: 100%;
`;

export const Image = styled.img`
  ${({ theme, displayNone }) => css`
    width: 90%;

    @media ${theme.media.lteMedium} {
      display: ${displayNone ? 'none' : ''};
      margin-top: -5rem;
    }
  `}
`;
