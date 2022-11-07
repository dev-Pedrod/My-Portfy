import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: col1;
    position: fixed;
    max-width: 25rem;

    @media ${theme.media.lteMedium} {
      margin-top: 1rem;
      position: sticky;
      max-width: 100%;
    }
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
    border: .1rem solid ${theme.colors.Gray};
  `}
`;

export const SecondCard = styled(ComponentCard)`
  ${({ theme }) => css`
    text-align: left;
    display: flex;
    flex-direction: column;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;