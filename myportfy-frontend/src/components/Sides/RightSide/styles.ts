import styled, {css} from "styled-components";

// components
import {Title as Heading} from "../../Heading/styles";

export const Container = styled.div`
  ${({theme}) => css`
    grid-area: col3;
    cursor: default;
    position: fixed;
    max-width: 30rem;
  `}
`;

export const ComponentCard = styled.div`
  ${({theme}) => css`
    text-align: center;
    overflow: hidden;
    margin-bottom: .8rem;
    background-color: ${theme.colors.white};
    border-radius: .5rem;
    position: relative;
    border: .1rem solid ${theme.colors.Gray};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.div`
  ${({theme}) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.sizes.xsmall};
    width: 100%;
    color: ${theme.colors.black};

    ${Heading} {
      color: inherit;
      font-size: inherit;
    }
  `}
`;
