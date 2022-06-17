import React, { useState } from "react";

// images
import resume from "../../assets/images/resume.svg"
import bugImage from "../../assets/images/Bug.svg"

// components
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { InfoSection } from "../../components/InfoSection";
import { OptionsSection } from "../../components/OptionsSection";
import { BugReportSection } from "../../components/BugReportSection";
import { Footer } from "../../components/Footer";
import { NavbarBottom } from "../../components/NavbarBottom";

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}/>
      <NavbarBottom/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridTwoColumn srcImg={resume} alt="Portfólio online" component={<InfoSection/>}/>
      <OptionsSection/>
      <GridTwoColumn srcImg={bugImage} imgStart={true} alt="reporte de bugs" component={<BugReportSection/>}/>
      <Footer/>
    </>
  );
};
