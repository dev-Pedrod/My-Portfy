import React from 'react'

//components
import { Heading } from '../../Heading'
import {Button} from "../../Button";
import { TextComponent } from '../../TextComponent'

// styles
import * as Styled from './styles'

type InfoSectionProps = {
  topLine?: string;
  heading?: string;
  text?: string;
  buttonBg?: boolean
  buttonLink: string;
  buttonTittle: string;
}

export const InfoSection = (sectionProps: InfoSectionProps) => {
  return (
    <Styled.InfoContainer>
        <Styled.InfoWrapper>
            <Styled.TopLine>{sectionProps.topLine}</Styled.TopLine>
            <Heading>{sectionProps.heading}</Heading>
            <TextComponent>{sectionProps.text}</TextComponent>
            <Button type='default' background={sectionProps.buttonBg} to={sectionProps.buttonLink}>{sectionProps.buttonTittle}</Button>
        </Styled.InfoWrapper>
    </Styled.InfoContainer>
  )
}
