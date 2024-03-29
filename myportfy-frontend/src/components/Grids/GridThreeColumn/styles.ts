import styled, {css} from "styled-components";

// components
import {Container as SectionContainer} from "../../Sections/SectionContainer/styles";

export const Section = styled(SectionContainer)`
  ${({theme}) => css`
    @media ${theme.media.lteMedium} {
      padding: 0;
    }
  `}
`;

export const Container = styled.div`
  ${({theme}) => css`
    display: grid;
    color: ${theme.colors.black};
    grid-template-columns: minmax(25rem, 5fr) minmax(0, 12fr) minmax(20rem, 7fr);
    gap: ${theme.spacings.medium};
    width: 100%;
    grid-template-areas: 'col1 col2 col3';

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};
    }

    @media screen and (max-width: 990px) {
      grid-template-columns: minmax(25rem, 5fr) minmax(0, 12fr) minmax(0rem, 0rem);
      grid-template-areas: 'col1 col2';
    }
  `}
`;

export const Column1 = styled.aside`
  ${({theme}) => css`
    grid-area: col1;
  `}
`;

export const Column1Wrapper = styled.div`
  ${({theme}) => css`
    position: sticky;
    max-width: 100%;
  `}
`;

export const Column2 = styled.main`
  ${({theme}) => css`
    grid-area: col2;
  `}
`;

export const Column2Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;

export const Column3 = styled.aside`
  ${({theme}) => css`
    grid-area: col3;
    background: none;

    @media screen and (max-width: 990px) {
      display: none;
    }
  `}
`;

export const Column3Wrapper = styled.div`
  ${({theme}) => css`
    position: sticky;
  `}
`;

