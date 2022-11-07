import styled, { css } from "styled-components";

// icons
import { FcAddImage } from "react-icons/fc";

// components
import { Container as Text} from "../../TextComponent/styles"

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem solid ${theme.colors.Gray};
    border-radius: .5rem;
    max-height: 15rem;
    width: 100%;
    padding: 1.5rem 1rem;
    transition: all 0.2s ease-in-out;
    cursor: default;

    ${Text} {
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const DivInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 4.8rem;
  `}
`;

export const InputButton = styled.button`
  ${({ theme }) => css`
    border: .1rem solid ${theme.colors.Gray};
    border-radius: 5rem;
    cursor: pointer;
    background: ${theme.colors.white};
    height: 100%;
    padding: 0 1.5rem;
    transition: all .5s;
    width: 100%;
    text-align: start;

    &:hover {
      background: ${theme.colors.mediumGray};
    }
  `}
`;

export const ImageButton = styled.button`
  ${({ theme }) => css`
    border-radius: 5rem;
    border: none;
    cursor: pointer;
    background: ${theme.colors.white};
    height: 100%;
    transition: all .5s;
    width: auto;
  `}
`;

export const ImageIcon = styled(FcAddImage)`
  ${({ theme }) => css`
    width: 3rem;
    height: 100%;
  `}
`;

export const AuthorImage = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 4.8rem;
    border-radius: 5rem;
    cursor: pointer;
  `}
`;
