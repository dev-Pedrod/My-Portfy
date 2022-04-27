import React, { useState } from "react";

// components
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { InfoSection } from "../../components/InfoSection";
import { OptionsSection } from "../../components/OptionsSection";

// images
import resume from "../../assets/images/resume.svg"

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridTwoColumn srcImg={resume} alt="Portfólio online" component={<InfoSection/>}/>
      <OptionsSection/>
    </>
  );
};
