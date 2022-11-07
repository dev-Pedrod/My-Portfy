import React from 'react'

// styles
import * as Styled from "./styles";

// images
import Icon1 from "../../../assets/images/personal-data.svg";
import Icon2 from "../../../assets/images/personal-file.svg";
import Icon3 from "../../../assets/images/customization.svg";

// components
import {Heading} from '../../Heading';
import {TextComponent} from '../../TextComponent';

export const TemplatesSection = () => {
  return (
    <Styled.ServiceContainer>
      <Heading size={'big'}>Templates</Heading>
      <Styled.ServicesWrapper>

        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon1}/>
          <Styled.ServicesH2>Lorem ipsum</Styled.ServicesH2>
          <TextComponent>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</TextComponent>
        </Styled.ServicesCard>

        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon2}/>
          <Styled.ServicesH2>Lorem ipsum</Styled.ServicesH2>
          <TextComponent>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</TextComponent>
        </Styled.ServicesCard>

        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon3}/>
          <Styled.ServicesH2>Lorem ipsum</Styled.ServicesH2>
          <TextComponent>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</TextComponent>
        </Styled.ServicesCard>

      </Styled.ServicesWrapper>
    </Styled.ServiceContainer>
  )
}
