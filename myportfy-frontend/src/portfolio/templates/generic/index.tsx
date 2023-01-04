import React, {useState} from "react";

// styles
import {DivEdit, EditIcon} from "./styles";

// images
// @ts-ignore
import astro from "../../../assets/images/astro.png";

// components
import {PNavbar} from "../../portfolio-components/p-navbar";
import {PSection} from "../../portfolio-components/p-section";
import {SectionCreate} from "../../portfolio-components/p-section/create";
import {InfoSection} from "../../../components/Sections/InfoSection";
import {PGridTwoColumn} from "../../portfolio-components/p-gridTwoColumn";

export const GenericTemplate = () => {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <>
      <PNavbar editActive={editActive}/>
      <PSection editActive={editActive}>
        <PGridTwoColumn
          component={
            <InfoSection
              topLine={"Catarina Silva"}
              heading={"Creative websites for your brand"}
              text={"A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact."}
            />}
          srcImg={astro}
          imgStart={false}/>
      </PSection>
      {editActive && <SectionCreate/>}
      <DivEdit title="Habilitar edição" onClick={() => setEditActive(!editActive)}>
        <EditIcon/>
      </DivEdit>
    </>
  );
};
