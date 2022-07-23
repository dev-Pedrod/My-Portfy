import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
  ${({ theme, isSuccess }) => css`
    display: flex;
    opacity: 60%;
    top: 5rem;
    right: 5rem;
    z-index: 10;
    position: fixed;
    overflow: hidden;
    height: auto;
    width: auto;
    border-radius: .4rem;
    padding: 1rem;
    background-color: ${isSuccess? `green` : theme.colors.secondaryColor };
  `}
`;

export const MessageText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;