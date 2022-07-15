import React from "react";

// components 
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { Login } from "../../components/LoginComponent";
import { LogoLink } from "../../components/LogoLink";

// images
import home from "../../assets/images/resume_II.svg";
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const LoginPage = () => {
  document.title = "Login - My Portfy"
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="/" text="My Portfy" />
      </LogoDiv>
      <GridTwoColumn
        background={true}
        srcImg={home}
        alt="Teste"
        imgStart={true}
        displayNone={true}
        component={<Login />}
      />
    </>
  );
};
