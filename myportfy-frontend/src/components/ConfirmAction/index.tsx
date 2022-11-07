import React from "react";

// components
import { TextComponent } from "../TextComponent";

// styles
import * as Styled from "./styles";

type ConfirmActionProps = {
  isOpen: boolean;
  toggle: Function;
  confirmAction: Function,
  actionTitle: string,
  errors: string,
}

export const ConfirmAction = ({
  isOpen,
  toggle,
  confirmAction,
  actionTitle,
  errors,
}: ConfirmActionProps) => {
  document.addEventListener("mouseup", function (e) {
    let modal = document.getElementById("modal");
    if (e.target instanceof HTMLElement && modal !== null && !modal.contains(e.target) && isOpen) {
      toggle();
    }
  })

  return (
    <>
      {isOpen && (
        <>
          <Styled.Overlay/>
          <Styled.ContainerModal id="modal">
            <Styled.Header>
              <TextComponent>Confirmar ação</TextComponent>
              <Styled.HeaderBtn onClick={() => {toggle()}}>
                <Styled.CloseIcon />
              </Styled.HeaderBtn>
            </Styled.Header>

            <Styled.TopDiv>
              <TextComponent>{actionTitle}</TextComponent>
            </Styled.TopDiv>

            <Styled.Footer>
              <Styled.Texts>Você tem certeza disso?</Styled.Texts>
              <Styled.Cancel onClick={() => {toggle()}} />
              <Styled.Confirm onClick={() => {confirmAction()}} />
            </Styled.Footer>
            {errors&& (<Styled.ErrorMessage>{errors}</Styled.ErrorMessage>)}
          </Styled.ContainerModal>
        </>
      )}
    </>
  );
};
