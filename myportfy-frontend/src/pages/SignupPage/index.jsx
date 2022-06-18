import React from "react";

// components
import { LogoLink } from "../../components/LogoLink";
import { Signup } from "../../components/SignupComponent";

// images
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const SignupPage = () => {
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="/" text="My Portfy" />
      </LogoDiv>
      <Signup />
    </>
  );
};
