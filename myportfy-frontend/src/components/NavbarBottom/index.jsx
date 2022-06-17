// components
import { NavLink } from "../NavLink";

// styles
import {
  CreateI,
  DivItens, FaHomeI, Nav,
  NavbarContainer, NavLinks,
  NavMenu,
  NavP,
  NotificationsI,
  ProfileI
} from "./NavbarBottomStyles";

export const NavbarBottom = () => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavMenu>
            <NavLinks to={"/"}>
              <DivItens>
                <FaHomeI/>
                <NavP>Início</NavP>
              </DivItens>
            </NavLinks>

            <NavLink to={"/"}>
              <DivItens>
                <CreateI/>
                <NavP>Publicar</NavP>
              </DivItens>
            </NavLink>

            <NavLink>
              <DivItens>
                <NotificationsI/>
                <NavP>Notificações</NavP>
              </DivItens>
            </NavLink>

            <NavLink>
              <DivItens>
                <ProfileI/>
                <NavP>Perfil</NavP>
              </DivItens>
            </NavLink>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};
