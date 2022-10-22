import React from 'react'
import P from 'prop-types';

//components
import { Heading } from '../Heading'
import {Button} from "../ButtonComponent";

import { TextComponent } from '../TextComponent'
// styles
import * as Styled from './InfoSectionStyles'

export const InfoSection = ({topLine, heading, text, buttonBg, buttonLink, buttonTittle}) => {
  return (
    <Styled.InfoContainer>
        <Styled.InfoWrapper>
            <Styled.TopLine>{topLine}</Styled.TopLine>
            <Heading>{heading}</Heading>
            <TextComponent>{text}</TextComponent>
            <Button type='default' background={buttonBg} to={buttonLink}>{buttonTittle}</Button>
        </Styled.InfoWrapper>
    </Styled.InfoContainer>
  )
}

InfoSection.propTypes = {
  topLine: P.string,
  heading: P.string,
  text: P.string,
  buttonBg: P.bool,
  buttonLink: P.string,
  buttonTittle: P.string
};
