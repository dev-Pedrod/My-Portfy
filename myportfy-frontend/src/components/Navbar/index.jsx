import React from "react";
import LogoMP from "../../assets/images/logo.svg";
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";
import { NavLink } from "../NavLink";
import {
  FaBarsI,
  IconSearch,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavMenu,
  NavSearch,
  Search,
  SearchDiv,
} from "./NavbarElements";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <LogoLink link="#" text="My Portfy" srcImg={LogoMP} />
          <MobileIcon onClick={toggle}>
            <FaBarsI />
          </MobileIcon>
          <NavSearch>
            <SearchDiv>
              <IconSearch type="submit" />
              <Search placeholder="Pesquisar" />
            </SearchDiv>
          </NavSearch>
          <NavMenu>
            <NavLink link="#"> Teste </NavLink>
            <NavLink link="#"> Teste </NavLink>
            <NavLink link="#"> Teste </NavLink>
          </NavMenu>
          <NavBtn>
            <Button background={true} to="/signin"> Entrar </Button>
            <Button background={false} to="/signup"> Cadastrar </Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
