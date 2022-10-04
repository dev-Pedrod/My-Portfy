import { Link as LinkS } from 'react-scroll';
import styled, { css } from 'styled-components';

// icons
import { BsGear } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  ${({ background, border, shadow }) => css`
    background: ${background};
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-bottom: ${border ? '1px solid #e5e5e5' : ''};
    box-shadow: ${shadow?'0 2px 4px rgb(0 0 0 / 10%)' : 'none' };
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 968px){
        transition: 0.8s all ease;
    }
  `}
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 110rem;

    @media screen and (max-width: 968px){
        justify-content: space-between;
        padding: 0 1rem;
    }
`;

export const Logo = styled.p`
${({ textColor, logoSize, theme, fontFamily, logoBold, logoItalic }) => css`
    font-family: ${fontFamily ? fontFamily : theme.font.family.default};
    color: ${textColor};
    font-size: ${logoSize};
    font-weight: ${logoBold? '700': ''};
    font-style: ${logoItalic? 'italic': ''};
    letter-spacing: .2rem;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
        align-items: flex-start;
    }
  `}  
`;

export const LogoDiv = styled.div`
  ${({ theme, height }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: ${height};
    padding: .3rem 0;

    @media ${theme.media.lteMedium}{
        margin-right: 1rem;
        justify-content: flex-start;
        align-items: flex start;

    }
  `}
`;

export const LogoImage = styled.img`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    width: 100%;
    height: 100%;

    @media ${theme.media.lteMedium}{
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  `}
`;

export const ConfigDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 5rem;
    background: ${theme.colors.ligthGray};
    color: black;
    width: auto;
    height: auto;
    box-shadow: 0 0 1em rgba(0,0,0,.3);
    padding: .5rem;

    @media ${theme.media.lteMedium}{
        margin-right: 1rem;
    }
  `}
`;


export const EditIcon = styled(BsGear)`
  ${({ size }) => css`
  display: flex;
  z-index: 99;
  color: inherit;
  cursor: pointer;
  font-size: ${size ? size : '1.5rem'};
  `}
`;

export const FaBarsI = styled(FaBars)`
  ${({ theme, color }) => css`
    display: none;

    @media ${theme.media.lteMedium}{
        display: block;
        margin-left: 2rem;
        color: ${color};
        font-size: 2.6rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
  `};
`;

export const MobileIcon = styled.div`
  ${({ theme }) => css`
  display: none;
  
  @media ${theme.media.lteMedium}{
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
  }
  `}
`;

export const NavMenu = styled.ul`
${({ theme }) => css`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.5rem;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const NavItem = styled.li`
    height: 6rem;
`

export const NavLinks = styled(LinkS)`
${({ theme, textColor, linkBorderColor, fontFamily, linkBold, linkItalic, linkSize }) => css`
    font-size: ${linkSize};
    font-family: ${fontFamily ? fontFamily : theme.font.family.secondary};
    color: ${textColor};
    font-weight: ${linkBold? '700': ''};
    font-style: ${linkItalic? 'italic': ''};
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    
    &:hover {
        border-bottom: .3rem solid ${linkBorderColor};
        transition: all 0.1s ease-in-out;
    }
  `}
`;

export const Link = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
`;

