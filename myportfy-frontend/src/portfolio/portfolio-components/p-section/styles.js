import styled, {css} from 'styled-components';

// icons
import {BsGear} from "react-icons/bs";

export const Container = styled.div`
  ${({theme}) => css`
    max-width: 100%;
    display: flex;
    //margin-top: -6rem;
    background: ${theme.colors.ligthGray};
    border: ${({isOpen}) => (isOpen ? '.2rem dashed #0080ff' : 'none')};
    transition: 0.1s ease-in-out;
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    margin: 6rem auto;
    padding: ${theme.spacings.large};
  `}
`;

export const EditIcon = styled(BsGear)`
  ${({theme, size}) => css`
    display: flex;
    margin: 6.5rem 2rem;
    width: auto;
    z-index: 99;
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
