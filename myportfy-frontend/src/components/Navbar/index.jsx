import { useContext } from "react";

// context
import { AuthContext } from "../../contexts/auth";

// assets
import LogoMP from "../../assets/images/logo.svg";

// components
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";
import { NavLink } from "../NavLink";

// styles
import * as Styled from "./NavbarStyles";

export const Navbar = ({ toggle }) => {
  const { logout } = useContext(AuthContext);
  const currentUser = localStorage.getItem("logged_username");

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <LogoLink link="/" text="My Portfy" srcImg={LogoMP} />
          <Styled.ProfileDiv>
            <Styled.ProfileI/>
          </Styled.ProfileDiv>
          <Styled.NavSearch>
            <Styled.SearchDiv>
              <Styled.IconSearch type="submit" />
              <Styled.Search placeholder="Pesquisar" />
            </Styled.SearchDiv>
          </Styled.NavSearch>
          <Styled.MobileIcon onClick={toggle}>
            <Styled.FaBarsI />
          </Styled.MobileIcon>
          <Styled.NavMenu>
            <NavLink link="/Feed"> Feed </NavLink>
            <NavLink link="/"> Home </NavLink>
            <NavLink link="/Criar"> Criar </NavLink>
          </Styled.NavMenu>
          {currentUser ? (
          <Styled.NavBtn>
            <Button background={true} to="#"> Perfil </Button>
            <Button background={false} to="#" onClick={handleLogout}> Sair </Button>
          </Styled.NavBtn>) : (
          <Styled.NavBtn>
            <Button background={true} to="/signin"> Entrar </Button>
            <Button background={false} to="/signup"> Cadastrar </Button>
          </Styled.NavBtn>)}
        </Styled.NavbarContainer>
      </Styled.Nav>
    </>
  );
};
