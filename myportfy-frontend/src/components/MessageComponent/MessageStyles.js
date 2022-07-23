import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
  ${({ theme, isSuccess }) => css`
    display: flex;
    top: 5rem;
    right: 5rem;
    z-index: 10;
    position: fixed;
    overflow: hidden;
    height: auto;
    width: auto;
    border-radius: 5rem;
    padding: 1rem;
    border: .2rem solid ${isSuccess? theme.colors.primaryColor_II : theme.colors.secondaryColor };
    background-color: ${theme.colors.white};
  `}
`;

export const MessageText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;