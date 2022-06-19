
// images
import bugImage from "../../assets/images/Bug.svg";
import resume from "../../assets/images/resume.svg";

// components
import { BugReportSection } from "../../components/BugReportSection";
import { Footer } from "../../components/Footer";
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { InfoSection } from "../../components/InfoSection";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { OptionsSection } from "../../components/OptionsSection";
import { Sidebar } from "../../components/Sidebar";

export const HomePage = ({toggle, isOpen}) => {

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
