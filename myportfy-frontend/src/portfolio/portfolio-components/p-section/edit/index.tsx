import React from 'react';

// styles
import * as Styled from "./styles";

// components
import {TextComponent} from "../../../../components/TextComponent";

type SectionEditProps = {
  isOpen: boolean,
  toggle: Function
}

export const SectionEdit = ({isOpen, toggle}: SectionEditProps) => {

  return (
    <Styled.Container isOpen={isOpen}>
      <Styled.Header>
        <TextComponent>Editar seção</TextComponent>
        <Styled.HeaderBtnIcon onClick={() => toggle()}>
          <Styled.CloseIcon/>
        </Styled.HeaderBtnIcon>
      </Styled.Header>
      <Styled.Wrapper>

      </Styled.Wrapper>
    </Styled.Container>
  );
};
