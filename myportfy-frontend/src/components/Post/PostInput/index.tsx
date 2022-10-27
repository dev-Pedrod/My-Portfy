import React, {useContext} from 'react'

// styles
import * as Styled from "./styles";

// components
import { TextComponent } from '../../TextComponent';
import { PostModal } from '../PostInputModal';

// context
import {AuthContext} from "../../../contexts/auth";

type PostInputProps = {
  toggle: Function;
  showForm: Boolean;
}

export const PostInputComponent = ({toggle, showForm}: PostInputProps) => {
  const { user } = useContext(AuthContext);
  return (
      <Styled.Container>
      <Styled.DivInput>
        <Styled.AuthorImage src={user&& user.profilePictureURL}/>
        <Styled.InputButton onClick={() => toggle()}>
          <TextComponent>Criar publicação</TextComponent>
        </Styled.InputButton>

        <Styled.ImageButton onClick={() => toggle()}>
          <Styled.ImageIcon/>
        </Styled.ImageButton>
      </Styled.DivInput>

      {showForm && (
        <PostModal toggle={toggle}/>
      )}

    </Styled.Container>
  )
}
