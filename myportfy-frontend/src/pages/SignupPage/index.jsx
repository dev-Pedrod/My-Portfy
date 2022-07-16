import React from "react";

// components
import { LogoLink } from "../../components/LogoLink";
import { Signup } from "../../components/SignupComponent";
import { Footer } from "../../components/Footer";

// images
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const SignupPage = () => {
  document.title = "Signup - MyPortfy"
  window.scrollTo(0, 0);
  return (
    <>
      <LogoDiv>
        <LogoLink srcImg={logo} link="/" text="My Portfy" />
      </LogoDiv>
      <Signup />
      <Footer />
    </>
  );
};
