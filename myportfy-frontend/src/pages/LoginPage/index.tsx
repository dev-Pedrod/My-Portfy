import React from "react";
import { useLocation } from "react-router-dom";

// components
import { GridTwoColumn } from "../../components/Grids/GridTwoColumn";
import { Login } from "../../components/Login";
import { LogoLink } from "../../components/LogoLink";
import { Footer } from "../../components/Footer";
import { Message } from "../../components/SystemMessage";

// images
import login from "../../assets/images/Login.svg";
import logo from "../../assets/images/logo.svg";

// styles
import { LogoDiv } from "./styles";

export const LoginPage = () => {
  document.title = "Login | MyPortfy"
  window.scrollTo(0, 0);

  const location = useLocation();
  let message: string;
  let isSuccess: boolean;

  if(location.state){
      message = location.state.message
      isSuccess = true;
  } else{
    message = localStorage.getItem("Message");
    isSuccess = JSON.parse(localStorage.getItem("isSuccess"));
  }

  return (
    <>
      {message && <Message text={message} isSuccess={isSuccess}/>}
      <LogoDiv>
        <LogoLink srcImg={logo} link="/" text="My Portfy" />
      </LogoDiv>
      <GridTwoColumn
        srcImg={login}
        alt="Entrada"
        imgStart={true}
        component={<Login />}
      />
      <Footer />
    </>
  );
};
