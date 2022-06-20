import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// icons
import { FaHome, FaUserFriends } from "react-icons/fa";
import { IoIosAddCircle, IoMdNotifications } from "react-icons/io";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

// components
import { Container as LogoLink } from "../LogoLink/LogoLinkStyle";


export const Nav = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .1rem solid ${theme.colors.Gray};
    position: sticky;
    z-index: 10;
    top: 0;

    @media ${theme.media.lteMedium} {
      transition: 0.8s all ease;
      height: 6rem;
    }
  `}
`;

export const NavbarContainer = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 8rem;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 110rem;

    @media ${theme.media.lteMedium} {
      justify-content: flex-start;
      padding: 0;
    }

    ${LogoLink} {
      @media ${theme.media.lteMedium}{
        display: none;
      }
    }
  `}
`;

export const ProfileDiv = styled.div`
  ${({ theme }) => css`
  display: none;

  @media ${theme.media.lteMedium} {
      display: flex;
      margin: 0 2.5rem 0 1rem;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  `};
`;

export const ProfileMobile = styled(IoPersonCircleOutline)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: flex;
      height: 70%;
      width: 70%;
    }
  `}
`;

export const NavSearch = styled.form`
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    width: auto;

  @media screen and (max-width: 70rem) {
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media screen and (max-width: 50rem) {
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 50%;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  justify-content: center;
  border-radius: 5rem;
  border: 0.2rem solid;
`;

export const IconSearch = styled(FaSearch)`
  height: 2.3rem;
  width: 2.3rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;

export const Search = styled.input`
  outline: none;
  border: none;
  border-radius: 0 5rem 5rem 0;
  width: 100%;
  height: 2.4rem;
  margin-left: 0.8rem;
  margin-right: 1%;
`;

export const NavLinks = styled(Link)`
${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.darkGray};
    position: relative;

    &:hover {
      color: ${theme.colors.black};
    }
  `}
`;

export const DivItens = styled.div`
  display: block;
`;

export const ProfileButton = styled.button`
${({ theme }) => css`
    background: none;
    outline: none;
    border: none;
    display: block;
    text-decoration: none;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
    position: relative;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const ProfileI = styled(IoPersonCircleOutline)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const FaHomeI = styled(FaHome)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      font-size: 2.4rem;
      position: relative;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const FriendsI = styled(FaUserFriends)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      font-size: 2.4rem;
      position: relative;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const NotificationsI = styled(IoMdNotifications)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      font-size: 2.4rem;
      position: relative;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const CreateI = styled(IoIosAddCircle)`
  ${({ theme }) => css`
      display: inline-block;
      overflow: hidden;
      font-size: 2.4rem;
      position: relative;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const NavMenuIcons = styled.ul`
  ${({ theme, display }) => css`
      justify-content: space-between;
      display: flex;
      margin-left: -1rem;
      align-items: center;
      text-align: center;
      font-size: 1.3rem;

    @media ${theme.media.lteMedium} {
      display: ${display ? 'flex' : 'none'};
    }
  `}
`;

export const NavP = styled.p`
  ${({ theme }) => css`
      font-size: 1.2rem;
      text-transform: capitalize;
      margin-top: -.5rem;
      cursor: pointer;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const FaBarsI = styled(FaBars)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: block;
      position: absolute;
      top: 0.15rem;
      right: 0;
      margin-left: -5rem;
      transform: translate(-100%, 60%);
      font-size: ${({ theme }) => theme.font.sizes.medium};
      cursor: pointer;
    }
  `}
`;

export const MobileIcon = styled.div`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: block;

    }
  `}
`;

export const NavBtn = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
    margin-right: -8rem;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;