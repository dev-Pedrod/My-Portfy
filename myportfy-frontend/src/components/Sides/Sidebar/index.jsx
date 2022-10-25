import React from "react";
import { useContext } from "react";

// context
import { AuthContext } from "../../contexts/auth";

// components
import { Button } from "../Button/styles";

// styles
import * as Styled from "./SidebarStyles";

export const Sidebar = ({ isOpen, toggle }) => {
  const { logout } = useContext(AuthContext);
  let currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink to="/Feed" onClick={toggle}>
            Feed
          </Styled.SidebarLink>
          <Styled.SidebarLink to="/" onClick={toggle}>
            Home
          </Styled.SidebarLink>
          <Styled.SidebarLink to="/Criar" onClick={toggle}>
            Criar
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
        {currentUser ? (<>
        <Styled.SideBtnWrap>
          <Button background={true} to="#">
            Perfil
          </Button>
        </Styled.SideBtnWrap>
        <Styled.SideBtnWrap>
          <Button background={false} to="#" onClick={handleLogout}>
            Sair
          </Button>
        </Styled.SideBtnWrap></>) : (<>
        <Styled.SideBtnWrap>
          <Button background={true} to="/signin">
            Login
          </Button>
        </Styled.SideBtnWrap>
        <Styled.SideBtnWrap>
          <Button background={false} to="/signup">
            Cadastrar
          </Button>
        </Styled.SideBtnWrap> </>)}
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};
