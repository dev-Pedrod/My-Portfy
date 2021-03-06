// images
import bugImage from "../../assets/images/Bug.svg";
import resume from "../../assets/images/resume.svg";

// components
import { Footer } from "../../components/Footer";
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { InfoSection } from "../../components/InfoSection";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Sidebar } from "../../components/Sidebar";
import { TemplatesSection } from "../../components/TemplatesSection";

export const HomePage = ({ toggle, isOpen }) => {
  document.title = "MyPortfy";
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridTwoColumn
        srcImg={resume}
        alt="Portfólio online"
        component={
          <InfoSection
            topLine={"My Portfy"}
            heading={"Seu portfólio de um jeito rápido e fácil"}
            text={
              "Você pode criar o seu portfólio online de uma forma simples e personalizada. Divulgue o seu trabalho de forma gratuita!"
            }
            buttonBg={true}
            buttonLink={"#"}
            buttonTittle={"Começar"}
          />
        }
      />
      <TemplatesSection />
      <GridTwoColumn
        srcImg={bugImage}
        imgStart={true}
        alt="reporte de bugs"
        component={
          <InfoSection
            topLine={"Nos ajude a melhorar!"}
            heading={"Faça sugestões, reporte bugs e melhorias"}
            text={
              "Contribua com o projeto! Nos ajude a entregar uma experiência cada vez melhor para vocês. Sua sugestão é bem vinda 😉"
            }
            buttonBg={true}
            buttonLink={"#"}
            buttonTittle={"Contribuir"}
          />
        }
      />
      <Footer />
      <NavbarBottom />
    </>
  );
};
