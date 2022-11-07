import React from "react";
import { useContext } from "react";

// context
import { AuthContext } from "../../../contexts/auth";

// components
import {Button} from "../../Button";

// styles
import * as Styled from "./styles";

export const Sidebar = ({ isOpen, toggle }) => {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
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
        {user ? (<>
        <Styled.SideBtnWrap>
          <Button type={"link"} background={true} to="#">
            Perfil
          </Button>
        </Styled.SideBtnWrap>
        <Styled.SideBtnWrap >
          <Button background={false} onClick={(e) => handleLogout(e)}>
            Sair
          </Button>
        </Styled.SideBtnWrap></>) : (<>
        <Styled.SideBtnWrap>
          <Button type={"link"} background={true} to="/signin">
            Login
          </Button>
        </Styled.SideBtnWrap>
        <Styled.SideBtnWrap>
          <Button type={"link"} background={false} to="/signup">
            Cadastrar
          </Button>
        </Styled.SideBtnWrap> </>)}
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};
