import styled, {css} from 'styled-components';

// icons
import {BsGear} from "react-icons/bs";

export const Container = styled.div<{isOpen: boolean}>`
  ${({theme, isOpen}) => css`
    max-width: 100%;
    display: flex;
    //margin-top: -6rem;
    background: ${theme.colors.ligthGray};
    border: ${isOpen ? '.2rem dashed #0080ff' : 'none'};
    transition: 0.1s ease-in-out;
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;

export const EditIcon = styled(BsGear)`
  ${({theme, size}) => css`
    display: flex;
    margin: 1rem 2rem;
    width: auto;
    z-index: 97;
    background: ${theme.colors.ligthGray};
    border-radius: 5rem;
    color: ${theme.colors.black};
    cursor: pointer;
    font-size: ${size ? size : '1.5rem'};

    @media ${theme.media.lteMedium} {
      margin-right: 1rem;
    }
  `}
`;
