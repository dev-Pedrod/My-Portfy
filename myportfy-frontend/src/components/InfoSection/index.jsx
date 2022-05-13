import React from 'react'
import { Button } from '../ButtonComponent/ButtonStyle'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'
import * as Styled from './InfoSectionStyles'

export const InfoSection = () => {
  return (
    <Styled.InfoContainer>
        <Styled.InfoWrapper>
            <Styled.TopLine>My Portfy</Styled.TopLine>
            <Heading>Seu portfólio de um jeito rápido e fácil</Heading>
            <TextComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti deserunt placeat assumenda ea sint.</TextComponent>
            <Button background={true} to="#">Começar</Button>
        </Styled.InfoWrapper>
    </Styled.InfoContainer>
  )
}
