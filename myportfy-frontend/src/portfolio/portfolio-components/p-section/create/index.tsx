import React from 'react';

// styles
import * as Styled from "./styles";

// components
import {TextComponent} from "../../../../components/TextComponent";

export const SectionCreate = () => {

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.IconDiv>
          <Styled.IconAdd/>
          <TextComponent>Adicionar seção</TextComponent>
        </Styled.IconDiv>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
