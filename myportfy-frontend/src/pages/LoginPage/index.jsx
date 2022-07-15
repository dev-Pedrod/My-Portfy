import React from "react";

// components 
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { Login } from "../../components/LoginComponent";
import { LogoLink } from "../../components/LogoLink";

// images
import login from "../../assets/images/Login.svg";
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const LoginPage = () => {
  document.title = "Login - MyPortfy"
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="/" text="My Portfy" />
      </LogoDiv>
      <GridTwoColumn
        background={true}
        srcImg={login}
        alt="Entrada"
        imgStart={true}
        displayNone={true}
        component={<Login />}
      />
    </>
  );
};
