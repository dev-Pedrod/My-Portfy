import React from 'react'

// styles
import * as Styled from "./OptionsSectionStyles";
import Icon3 from "../../assets/images/customization.svg";
import Icon1 from "../../assets/images/personal-data.svg";
import Icon2 from "../../assets/images/personal-file.svg";

// components
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const OptionsSection = () => {
  return (
    <Styled.ServiceContainer>
        <Heading size={'big'}>Nossas Opções</Heading>
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
