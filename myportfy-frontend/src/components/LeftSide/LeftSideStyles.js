import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: col1;
  `}
`;

export const ComponentCard = styled.div`
  ${({ theme }) => css`
    padding: .8rem;
    text-align: center;
    overflow: hidden;
    margin-bottom: .8rem;
    background-color: ${theme.colors.white};
    border-radius: .5rem;
    position: relative;
    border: .1rem solid ${theme.colors.Gray};
  `}
`;

export const SecondCard = styled(ComponentCard)`
  ${({ theme }) => css`
    text-align: left;
    display: flex;
    flex-direction: column;
  `}
`;