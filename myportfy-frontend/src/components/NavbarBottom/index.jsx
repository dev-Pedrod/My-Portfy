// styles
import * as Styled from "./NavbarBottomStyles";

export const NavbarBottom = () => {

  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <Styled.NavMenu>
            <Styled.NavLinks to={"/"}>
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
                <Styled.NotificationsI/>
                <Styled.NavP>Notificações</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"}>
              <Styled.DivItens>
                <Styled.FriendsI/>
                <Styled.NavP>Amigos</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>
          </Styled.NavMenu>
          
        </Styled.NavbarContainer>
      </Styled.Nav>
    </>
  );
};
