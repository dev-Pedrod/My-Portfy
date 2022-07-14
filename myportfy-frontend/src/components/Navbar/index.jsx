import { useContext } from "react";

// context
import { AuthContext } from "../../contexts/auth";

// assets
import LogoMP from "../../assets/images/logo.svg";

// components
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";

// styles
import * as Styled from "./NavbarStyles";
import { Dropdown  } from "../Dropdown";

export const Navbar = ({ toggle, isOpen }) => {
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
            <Styled.ProfileMobile/>
          </Styled.ProfileDiv>

          <Styled.NavSearch>
            <Styled.SearchDiv>
              <Styled.IconSearch type="submit" />
              <Styled.Search placeholder="Pesquisar" />
            </Styled.SearchDiv>
          </Styled.NavSearch>

          <Styled.NavMenuIcons>
            <Styled.NavLinks to={"/feed"}>
              <Styled.DivItens>
                <Styled.FaHomeI/>
                <Styled.NavP>Início</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"}>
              <Styled.DivItens>
                <Styled.CreateI/>
                <Styled.NavP>Publicar</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"}>
              <Styled.DivItens>
                <Styled.FriendsI/>
                <Styled.NavP>Amigos</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"}>
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
                <Styled.ProfileI/>
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
