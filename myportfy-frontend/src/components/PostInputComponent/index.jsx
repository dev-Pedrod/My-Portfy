import React from 'react'

// styles
import * as Styled from "./PostInputStyles";

// assets
import perfil from "../../assets/images/perfil.jpg";

// components
import { TextComponent } from '../TextComponent';


export const PostInputComponent = () => {
  return (
    <Styled.Container>
      <Styled.DivInput>
        <Styled.AuthorImage src={perfil}/>
        <Styled.InputButton>
          <TextComponent>Criar publicação</TextComponent>
        </Styled.InputButton>
        
        <Styled.ImageButton>
          <Styled.ImageIcon/>
        </Styled.ImageButton>
      </Styled.DivInput>
    </Styled.Container>
  )
}
