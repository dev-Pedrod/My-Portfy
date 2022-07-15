import React from "react";

// images
import logo from "../../assets/images/logo.svg";
import password from "../../assets/images/password.svg";

// components
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { LogoLink } from "../../components/LogoLink";
import { UpdatePassword } from "../../components/UpdatePassword";
import { LogoDiv } from "../LoginPage/styles";

export const UpdatePasswordPage = () => {
  document.title = "Password - MyPortfy";
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="/forgot" text="My Portfy" />
      </LogoDiv>
      <GridTwoColumn
        srcImg={password}
        imgStart={true}
        displayNone={true}
        component={<UpdatePassword />}
      />
    </>
  );
};
