import React from "react";

import { GridTwoColumn } from "../../components/GridTwoColumn";
import { Login } from "../../components/LoginComponent";
import { LogoLink } from "../../components/LogoLink";

// images
import home from "../../assets/images/resume_II.svg";
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const LoginPage = () => {
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="#" text="My Portfy" />
      </LogoDiv>
      <GridTwoColumn
        title=''
        text=''
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
