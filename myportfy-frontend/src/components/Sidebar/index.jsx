import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

// components
import { Button } from "../ButtonComponent/ButtonStyle";

// styles
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarStyles";

export const Sidebar = ({ isOpen, toggle }) => {
  const { logout } = useContext(AuthContext);
  const currentUser = localStorage.getItem("logged_username");

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Feed" onClick={toggle}>
            Feed
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/Criar" onClick={toggle}>
            Criar
          </SidebarLink>
        </SidebarMenu>
        {currentUser ? (<>
        <SideBtnWrap>
          <Button background={true} to="#">
            Perfil
          </Button>
        </SideBtnWrap>
        <SideBtnWrap>
          <Button background={false} to="#" onClick={handleLogout}>
            Sair
          </Button>
        </SideBtnWrap></>) : (<>
        <SideBtnWrap>
          <Button background={true} to="/signin">
            Login
          </Button>
        </SideBtnWrap>
        <SideBtnWrap>
          <Button background={false} to="/signup">
            Cadastrar
          </Button>
        </SideBtnWrap> </>)}
      </SidebarWrapper>
    </SidebarContainer>
  );
};
