import React from 'react'

//components
import { Button } from '../ButtonComponent/ButtonStyle'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

// styles
import * as Styled from './BugReportSectionStyles'

export const BugReportSection = () => {
  return (
    <Styled.BugReportContainer>
        <Styled.BugReportWrapper>
            <Styled.TopLine>Nos ajude a melhorar!</Styled.TopLine>
            <Heading>Faça sugestões, reporte bugs e melhorias</Heading>
            <TextComponent>Contribua com o projeto! Nos ajude a entregar uma experiência cada vez melhor para vocês. Sua sugestão é bem vinda 😉</TextComponent>
            <Button background={true} to="#">Contribuir</Button>
        </Styled.BugReportWrapper>
    </Styled.BugReportContainer>
  )
}