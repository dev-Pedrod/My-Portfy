import React from "react";
import { Button } from "../ButtonComponent/ButtonStyle";
import { LogoLink } from "../LogoLink";
import LogoMP from "../../assets/images/logo.svg";

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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#" onClick={toggle}>
            Feed
          </SidebarLink>
          <SidebarLink to="#" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="#" onClick={toggle}>
            Criar
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Button background={true} to="/signin">
            {" "}
            Entrar{" "}
          </Button>
        </SideBtnWrap>
        <SideBtnWrap>
          <Button background={false} to="/signup">
            {" "}
            Cadastrar{" "}
          </Button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
