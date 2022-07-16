import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// icons
import { FaHome, FaUserFriends } from "react-icons/fa";
import { IoIosAddCircle, IoMdNotifications } from "react-icons/io";

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;
    background: ${theme.colors.white};
    height: 6rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 10;

    @media ${theme.media.lteMedium} {
      transition: 0.8s all ease;
      border-top: .1rem solid ${theme.colors.Gray};
      bottom: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  `}
`;

export const NavbarContainer = styled.ol`
  box-sizing: border-box;
  width: 100%;
  padding: 3rem;
  list-style: none;
`;

export const NavLinks = styled(Link)`
${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
    position: relative;
  `}
`;

export const DivItens = styled.div`
  display: block;
`;

export const FaHomeI = styled(FaHome)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: inline-block;
      overflow: hidden;
      font-size: 2.2rem;
      position: relative;
    }
  `}
`;

export const FriendsI = styled(FaUserFriends)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: inline-block;
      overflow: hidden;
      font-size: 2.2rem;
      position: relative;
    }
  `}
`;

export const NotificationsI = styled(IoMdNotifications)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: inline-block;
      overflow: hidden;
      font-size: 2.2rem;
      position: relative;
    }
  `}
`;

export const CreateI = styled(IoIosAddCircle)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: inline-block;
      overflow: hidden;
      font-size: 2.2rem;
      position: relative;
    }
  `}
`;

export const NavMenu = styled.ul`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      justify-content: space-between;
      display: flex;
      margin-left: -1.5rem;
      align-items: center;
      text-align: center;
      font-size: 1.3rem;
    }
  `}
`;

export const NavP = styled.p`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      font-size: 1.2rem;
      margin-top: -.5rem;
    }
  `}
`;