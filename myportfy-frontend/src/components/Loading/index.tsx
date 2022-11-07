import React from 'react'

// assets
import LogoMP from '../../assets/images/logo.svg';

// styles
import * as Styled from './styles'

export const Loading = () => {
  return (
    <Styled.LoadingContainer>
        <Styled.LoadingWrapper>
            <Styled.Logo src={LogoMP}/>
            <Styled.LoadingBar/>
        </Styled.LoadingWrapper>
    </Styled.LoadingContainer>
  )
}
