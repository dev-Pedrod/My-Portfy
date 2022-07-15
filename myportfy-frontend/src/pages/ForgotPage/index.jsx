import React from 'react'

// images
import email from "../../assets/images/email.svg";
import logo from "../../assets/images/logo.svg";

// components
import { Forgot } from '../../components/Forgot'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { LogoLink } from '../../components/LogoLink';
import { LogoDiv } from '../LoginPage/styles';

export const ForgotPage = () => {
  document.title = "Forgot - MyPortfy"
  return (
    <>
        <LogoDiv>
            <LogoLink srcImg={logo} link="/" text="My Portfy" />
        </LogoDiv>
        <GridTwoColumn srcImg={email} imgStart={true} displayNone={true} alt="reporte de bugs" component={<Forgot/>}/>
    </>
  )
}
