import { useContext } from "react";

// context
import { AuthContext } from "../../contexts/auth";

// assets
import LogoMP from "../../assets/images/logo.svg";
import PeopleAvatar from "../../assets/images/PeopleAvatar.svg"

// components
import { LogoLink } from "../LogoLink";
import { Dropdown } from "../Dropdown";
import {Button} from "../Button";

// styles
import * as Styled from "./NavbarStyles";

export const Navbar = ({ toggle, isOpen, showSidebar }) => {
  const { logout } = useContext(AuthContext);
  let currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))

  const handleLogout = (e) => {
    logout();
  };

  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <LogoLink link="/" text="My Portfy" srcImg={LogoMP}/>

          <Styled.ProfileDiv>
            <Styled.ProfileMobile src={currentUser? currentUser.profilePictureURL : PeopleAvatar}/>
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

            <Styled.MobileIcon onClick={showSidebar}>
              <Styled.FaBarsI />
            </Styled.MobileIcon>

            {currentUser ? (
              <Styled.ProfileButton onClick={toggle}>
              <Styled.DivItens>
                <Styled.ProfileI src={currentUser? currentUser.profilePictureURL : PeopleAvatar}/>
              </Styled.DivItens>
              <Styled.NavP>{currentUser.username}</Styled.NavP>
              <Dropdown toggle={toggle} isOpen={isOpen} logout={handleLogout}/>
              </Styled.ProfileButton> ) : (

            <Styled.NavBtn>
              <Button type='link' background={true} to="/signin"> Entrar </Button>
              <Button type='link' background={false} to="/signup"> Cadastrar </Button>
            </Styled.NavBtn>)}
          </Styled.NavMenuIcons>

        </Styled.NavbarContainer>
      </Styled.Nav>

    </>
  );
};
