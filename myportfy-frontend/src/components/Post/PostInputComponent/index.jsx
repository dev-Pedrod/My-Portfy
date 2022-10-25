import React from 'react'

// styles
import * as Styled from "./PostInputStyles";

// components
import { TextComponent } from '../TextComponent';
import { PostModal } from '../PostInputModalComponent';


export const PostInputComponent = ({toggle, showForm}) => {
  let currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))

  return (
      <Styled.Container>
      <Styled.DivInput>
        <Styled.AuthorImage src={currentUser? currentUser.profilePictureURL: ''}/>
        <Styled.InputButton onClick={toggle}>
          <TextComponent>Criar publicação</TextComponent>
        </Styled.InputButton>

        <Styled.ImageButton onClick={toggle}>
          <Styled.ImageIcon/>
        </Styled.ImageButton>
      </Styled.DivInput>
      
      {showForm && (
        <PostModal toggle={toggle}/>
      )}

    </Styled.Container>
  )
}
