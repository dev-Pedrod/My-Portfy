import React from "react";

// images
import logo from "../../assets/images/logo.svg";
import password from "../../assets/images/password.svg";

// components
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { LogoLink } from "../../components/LogoLink";
import { UpdatePassword } from "../../components/UpdatePassword";
import { LogoDiv } from "../LoginPage/styles";
import { Footer } from "../../components/Footer";

export const UpdatePasswordPage = () => {
  document.title = "Password - MyPortfy";
  window.scrollTo(0, 0);
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
      <Footer/>
    </>
  );
};
