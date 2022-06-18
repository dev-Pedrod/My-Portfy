// components

// styles
import {
  CreateI,
  DivItens, FaHomeI, FriendsI, Nav,
  NavbarContainer, NavLinks,
  NavMenu,
  NavP,
  NotificationsI
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

            <NavLinks to={"/"}>
              <DivItens>
                <CreateI/>
                <NavP>Publicar</NavP>
              </DivItens>
            </NavLinks>

            <NavLinks to={"/"}>
              <DivItens>
                <NotificationsI/>
                <NavP>Notificações</NavP>
              </DivItens>
            </NavLinks>

            <NavLinks to={"/"}>
              <DivItens>
                <FriendsI/>
                <NavP>Amigos</NavP>
              </DivItens>
            </NavLinks>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};
