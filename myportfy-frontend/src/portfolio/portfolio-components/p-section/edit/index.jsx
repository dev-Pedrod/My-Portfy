import React from 'react';

// styles
import * as Styled from "./styles";

// components
import {TextComponent} from "../../../../components/TextComponent";

export const SectionEdit = ({isOpen, toggle}) => {

  document.addEventListener("mouseup", function (e) {
    var edit = document.getElementById("edit");
    if(edit !== null) {
      if (!edit.contains(e.target)) {
        if (isOpen === true) {
          toggle();
        }
      }
    }
  });

  return (
    <Styled.Container isOpen={isOpen} id="edit">
      <Styled.Header>
        <TextComponent>Editar seção</TextComponent>
        <Styled.HeaderBtnIcon onClick={toggle}>
          <Styled.CloseIcon/>
        </Styled.HeaderBtnIcon>
      </Styled.Header>
      <Styled.Wrapper>

      </Styled.Wrapper>
    </Styled.Container>
  );
};
