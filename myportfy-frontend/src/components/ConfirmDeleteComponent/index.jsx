import React from "react";

// components
import { TextComponent } from "../TextComponent";

// styles
import * as Styled from "./ConfirmDeleteStyles";

export const ConfirmDelete = ({
  isOpen,
  toggle,
  confirmAction,
  actionTitle,
  errors,
  setDeleted
}) => {
  document.addEventListener("mouseup", function (e) {
    var modal = document.getElementById("modal");
    if (modal !== null) {
      if (!modal.contains(e.target)) {
        if (isOpen) {
          toggle();
        }
      }
    }
  });
  return (
    <>
      {isOpen && (
        <>
          <Styled.Overlay/>
          <Styled.ContainerModal id="modal">
            <Styled.Header>
              <TextComponent>Confirmar ação</TextComponent>
              <Styled.HeaderBtn onClick={toggle}>
                <Styled.CloseIcon />
              </Styled.HeaderBtn>
            </Styled.Header>

            <Styled.TopDiv>
              <TextComponent>{actionTitle}</TextComponent>
            </Styled.TopDiv>

            <Styled.Footer>
              <Styled.Texts>Você tem certeza disso?</Styled.Texts>
              <Styled.Cancel onClick={toggle} />
              <Styled.Confirm onClick={() => {confirmAction()}} />
            </Styled.Footer>
            {errors&& (<Styled.ErrorMessage>{errors}</Styled.ErrorMessage>)}
          </Styled.ContainerModal>
        </>
      )}
    </>
  );
};
