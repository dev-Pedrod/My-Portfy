import styled, { css } from "styled-components";

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: -10rem;
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 20rem;
  `}
`;

export const LoadingBar = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: .4rem;
    background: ${theme.colors.Gray};
    margin-top: 1rem;
    position: relative;
    border-radius: 5rem;
    overflow: hidden;

    &::before{
      content: "";
      width: 6.8rem;
      height: .4rem;
      background: ${theme.colors.primaryColor_II};
      position: absolute;
      left: -3.4rem;
      animation: grenbar 1.5s infinite ease;
    }

    @keyframes grenbar {
      50% {
        left: 16rem;
      }
    }
  `}
`;
