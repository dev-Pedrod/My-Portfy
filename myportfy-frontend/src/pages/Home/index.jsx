import React, { useState } from 'react'

// images
import bugImage from "../../assets/images/Bug.svg";
import resume from "../../assets/images/resume.svg";

// components
import { Footer } from "../../components/Footer";
import { GridTwoColumn } from "../../components/Grids/GridTwoColumn";
import { InfoSection } from "../../components/Sections/InfoSection";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Sidebar } from "../../components/Sides/Sidebar";
import { TemplatesSection } from "../../components/Sections/TemplatesSection";

// data
import {homeData} from "./data";

export const HomePage = () => {
  document.title = "MyPortfy";
  // Sidebars
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <Navbar toggle={showDropdown} isOpen={dropdown} showSidebar={showSidebar} />
      <Sidebar isOpen={sidebar} toggle={showSidebar} />
      <GridTwoColumn
        srcImg={resume}
        alt={homeData.firstGridTwoColumn.alt}
        component={
          <InfoSection
            topLine={homeData.firstGridTwoColumn.topLine}
            heading={homeData.firstGridTwoColumn.heading}
            text={homeData.firstGridTwoColumn.text}
            buttonBg={homeData.firstGridTwoColumn.buttonBg}
            buttonLink={homeData.firstGridTwoColumn.buttonLink}
            buttonTittle={homeData.firstGridTwoColumn.buttonTittle}
          />
        }
      />
      <TemplatesSection />
      <GridTwoColumn
        srcImg={bugImage}
        imgStart={homeData.secondGridTwoColumn.imgStart}
        alt={homeData.secondGridTwoColumn.alt}
        component={
          <InfoSection
            topLine={homeData.secondGridTwoColumn.topLine}
            heading={homeData.secondGridTwoColumn.heading}
            text={homeData.secondGridTwoColumn.text}
            buttonBg={homeData.secondGridTwoColumn.buttonBg}
            buttonLink={homeData.secondGridTwoColumn.buttonLink}
            buttonTittle={homeData.secondGridTwoColumn.buttonTittle}
          />
        }
      />
      <Footer />
      <NavbarBottom />
    </>
  );
};
