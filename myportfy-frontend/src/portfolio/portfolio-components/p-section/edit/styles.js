import styled, {css} from 'styled-components';

// icons
import {RiCloseLine} from 'react-icons/ri'

export const Container = styled.div`
  ${({theme}) => css`
    top: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    color: white;
    height: 100vh;
    background-color: #101522;
    width: 25rem;
    z-index: 10;
    box-shadow: 0 0 1em rgba(0, 0, 0, .3);
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

    @media screen and (max-width: 968px) {
      //width: 100%;
      //left: 0;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;

export const Header = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #171f2f;
    padding: 0 ${theme.spacings.xxsmall};
    height: 5rem;
  `}
`

export const HeaderBtnIcon = styled.button`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    display: flex;
    height: 100%;
    outline: 0;
    transition: .2s;
    width: 2.5rem;
    cursor: pointer;
  `}
`;

export const CloseIcon = styled(RiCloseLine)`
  ${({theme}) => css`
    display: flex;
    font-size: 2.5rem;
    color: ${theme.colors.mediumGray};
  `}
`
