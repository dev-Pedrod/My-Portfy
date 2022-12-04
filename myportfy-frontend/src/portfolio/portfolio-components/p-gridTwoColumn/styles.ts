import styled, {css} from "styled-components";

// components
import {Title} from "../../../components/Heading/styles";
import {Container as Text} from "../../../components/TextComponent/styles";

export const Container = styled.div<{ imgStart: boolean }>`
  ${({theme, imgStart}) => css`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    cursor: default;
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
  ${({theme}) => css`
    grid-area: col1;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const Column1Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 50rem;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
  `}
`;

export const Column2 = styled.div`
  ${({theme}) => css`
    grid-area: col2;
  `}
`;

export const Column2Wrapper = styled.div`
  max-width: 65rem;
  height: 100%;
`;

export const Image = styled.img<{ displayNone: boolean }>`
  ${({theme, displayNone}) => css`
    width: 100%;
    animation: move 8s infinite alternate;

    @keyframes move {
      from{
        border-radius: 95% 54% 63% 97%;
        transform: translate(-10rem -5rem) rotate(-90deg);
      }
      to {
        border-radius: 45% 63% 54% 95%;
        transform: translate(50rem 10rem) rotate(-10deg);
      }
    }

    @media ${theme.media.lteMedium} {
      display: ${displayNone && 'none'};
    }
  `}
`;
