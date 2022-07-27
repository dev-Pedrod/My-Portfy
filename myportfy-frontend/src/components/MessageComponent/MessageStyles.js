import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    top: 2rem;
    z-index: 10;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 1rem;
    background: transparent;
  `}
`;

export const MessageWrapper = styled.div`
  ${({ theme, isSuccess }) => css`
    display: flex;
    top: 2rem;
    z-index: 10;
    position: fixed;
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
    opacity: 100%;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const LoadingBar = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: .2rem;
    background: none;
    margin-top: 2rem;
    display: flex;
    position: fixed;
    border-radius: 5rem;
    overflow: hidden;

    &::before{
      content: "";
      width: 20rem;
      height: .2rem;
      background: ${theme.colors.Gray};
      position: absolute;
      animation: grenbar 4s ease;
    }

    @keyframes grenbar {
      100% {
        width: 0rem;
      }
    }
  `}
`;