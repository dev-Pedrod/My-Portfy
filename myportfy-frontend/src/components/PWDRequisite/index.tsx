import React from 'react'

// styles
import * as Styled from "./styles";

type PWDRequisiteProps = {
  capsLetterFlag: boolean;
  numberFlag: boolean;
  lengthFlag: boolean;
}

export const PWDRequisite = ({capsLetterFlag, numberFlag, lengthFlag}: PWDRequisiteProps) => {
  return (
    <Styled.PWDContainer>
      <Styled.Flags isValid={numberFlag}>Pelo menos um número;</Styled.Flags>
      <Styled.Flags isValid={lengthFlag}>Pelo menos 8 caracteres;</Styled.Flags>
      <Styled.Flags isValid={capsLetterFlag}>Pelo menos uma letra maiúscula;</Styled.Flags>
    </Styled.PWDContainer>
  )
}
