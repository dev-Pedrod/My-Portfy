// styles
import * as Styled from "./styles";

export const NavbarBottom = () => {
  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <Styled.NavMenu>
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
                <Styled.NotificationsI/>
                <Styled.NavP>Notificações</Styled.NavP>
              </Styled.DivItens>
            </Styled.NavLinks>

            <Styled.NavLinks to={"/"} onClick={() => window.scrollTo(0, 0)}>
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
