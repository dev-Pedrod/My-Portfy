import { FaBars, FaSearch } from "react-icons/fa";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .1rem solid ${theme.colors.Gray};
    position: sticky;
    z-index: 10;
    top: 0;

    @media ${theme.media.lteMedium} {
      transition: 0.8s all ease;
    }
  `}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
`;

export const NavSearch = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 20%;

  @media screen and (max-width: 1035px) {
    display: none;
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

export const FaBarsI = styled(FaBars)`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: block;
      position: absolute;
      top: 0.9rem;
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
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
    }
  `}
`;

export const NavMenu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: -1.5rem;

    @media ${theme.media.lteMedium} {
      display: none;
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