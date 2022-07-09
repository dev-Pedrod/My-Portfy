import styled, { css } from "styled-components";

// components

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    color: ${theme.colors.black};
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(30rem, 7fr);
    margin: ${theme.spacings.medium};
    gap: ${theme.spacings.medium};
    grid-template-areas: 'col1 col2 col3';

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
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
    position: fixed;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      position: sticky;
    }
  `}
`;

export const Column2 = styled.div`
  ${({ theme }) => css`
    grid-area: col2;
  `}
`;

export const Column2Wrapper = styled.div`
    height: 100%;
`;

export const Column3 = styled.div`
  ${({ theme }) => css`
    grid-area: col3;
    background: none;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const Column3Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
  `}
`;

