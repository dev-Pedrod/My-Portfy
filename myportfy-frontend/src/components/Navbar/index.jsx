import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

// assets
import LogoMP from "../../assets/images/logo.svg";

// components
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";
import { NavLink } from "../NavLink";

// styles
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
} from "./NavbarStyles";

export const Navbar = ({ toggle }) => {
  const { logout } = useContext(AuthContext);
  const currentUser = localStorage.getItem("logged_username");

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <LogoLink link="/" text="My Portfy" srcImg={LogoMP} />
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
            <NavLink link="/Feed"> Feed </NavLink>
            <NavLink link="/"> Home </NavLink>
            <NavLink link="/Criar"> Criar </NavLink>
          </NavMenu>
          {currentUser ? (
          <NavBtn>
            <Button background={true} to="#"> Perfil </Button>
            <Button background={false} to="#" onClick={handleLogout}> Sair </Button>
          </NavBtn>) : (
          <NavBtn>
            <Button background={true} to="/signin"> Entrar </Button>
            <Button background={false} to="/signup"> Cadastrar </Button>
          </NavBtn>)}
        </NavbarContainer>
      </Nav>
    </>
  );
};
