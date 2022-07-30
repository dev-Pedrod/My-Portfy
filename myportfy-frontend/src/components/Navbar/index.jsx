import { useContext } from "react";

// context
import { AuthContext } from "../../contexts/auth";

// assets
import LogoMP from "../../assets/images/logo.svg";
import perfil from "../../assets/images/perfil.jpg";

// components
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";
import { Dropdown } from "../Dropdown";

// styles
import * as Styled from "./NavbarStyles";

export const Navbar = ({ toggle, isOpen }) => {
  const { logout } = useContext(AuthContext);
  const currentUser = localStorage.getItem("my-portfy:_username");

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <LogoLink link="/" text="My Portfy" srcImg={LogoMP}/>

          <Styled.ProfileDiv>
            <Styled.ProfileMobile src={perfil}/>
          </Styled.ProfileDiv>

          <Styled.NavSearch>
            <Styled.SearchDiv>
              <Styled.IconSearch type="submit" />
              <Styled.Search placeholder="Pesquisar" />
            </Styled.SearchDiv>
          </Styled.NavSearch>

          <Styled.NavMenuIcons>
            <Styled.NavLinks to={"/feed"} onClick={() => window.scrollTo(0, 0)}>
              <Styled.DivItens>
                <Styled.FaHomeI/>
                <Styled.NavP>Início</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <Styled.DivItens>
                <Styled.CreateI/>
                <Styled.NavP>Publicar</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <Styled.DivItens>
                <Styled.FriendsI/>
                <Styled.NavP>Amigos</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <Styled.DivItens>
                <Styled.NotificationsI/>
                <Styled.NavP>Notificações</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>
          </Styled.NavMenuIcons>

          <Styled.NavMenuIcons display={true}>

            <Styled.MobileIcon onClick={toggle}>
              <Styled.FaBarsI />
            </Styled.MobileIcon>

            {currentUser ? (
              <Styled.ProfileButton onClick={toggle}>
              <Styled.DivItens>
                <Styled.ProfileI src={perfil}/>
              </Styled.DivItens>
              <Styled.NavP>{currentUser}</Styled.NavP>
              <Dropdown toggle={toggle} isOpen={isOpen} logout={handleLogout}/>
              </Styled.ProfileButton> ) : (

            <Styled.NavBtn>
              <Button background={true} to="/signin"> Entrar </Button>
              <Button background={false} to="/signup"> Cadastrar </Button>
            </Styled.NavBtn>)}
          </Styled.NavMenuIcons>

        </Styled.NavbarContainer>
      </Styled.Nav>
      
    </>
  );
};
