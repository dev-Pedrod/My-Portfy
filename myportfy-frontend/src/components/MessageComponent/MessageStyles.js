import styled, { css } from "styled-components";

// icons
import { AiFillCheckCircle } from "react-icons/ai"
import { MdError } from "react-icons/md"

export const MessageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    bottom: 5rem;
    z-index: 1000;
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 1rem;
    background: transparent;

    @media ${theme.media.lteMedium} {
      bottom: 8rem;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const MessageWrapper = styled.div`
  ${({ theme, isSuccess }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: fixed;
    height: auto;
    width: auto;
    border-radius: 1rem;
    padding: 1rem;
    border: .2rem solid ${isSuccess? theme.colors.primaryColor_II : theme.colors.secondaryColor };
    background-color: ${theme.colors.white};
  `}
`;

export const MessageDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
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

export const DivIcon = styled.div`
  ${({ theme, isSuccess }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    height: 100%;
    width: auto;
  `}
`;

export const Success = styled(AiFillCheckCircle)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primaryColor_II};
    height: 100%;
    width: 2.5rem;
  `}
`;

export const Error = styled(MdError)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.secondaryColor};
    height: 100%;
    width: 2.5rem;
  `}
`;

export const LoadingBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: .2rem;
    background: none;
    margin-top: .2rem;
    display: flex;
    border-radius: 5rem;
    overflow: hidden;

    &::before{
      content: "";
      width: 100%;
      height: .2rem;
      background: ${theme.colors.Gray};
      animation: grenbar 4s ease;
    }

    @keyframes grenbar {
      100% {
        width: 0rem;
      }
    }
  `}
`;