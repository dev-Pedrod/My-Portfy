import React from 'react'

import LogoMP from "../../assets/images/logo.svg";

import { LoadingBar, LoadingContainer, LoadingWrapper, Logo } from './LoadingStyles'

export const Loading = () => {
  return (
    <LoadingContainer>
        <LoadingWrapper>
            <Logo src={LogoMP}/>
            <LoadingBar/>
        </LoadingWrapper>
    </LoadingContainer>
  )
}
