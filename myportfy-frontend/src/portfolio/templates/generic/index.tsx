import React, { useState } from "react";

// styles
import { DivEdit, EditIcon } from "./GenericStyles";

// components
import { PNavbar } from "../../portfolio-components/p-navbar";
import {PSection} from "../../portfolio-components/p-section";
import {SectionCreate} from "../../portfolio-components/p-section/create";

export const GenericTemplate = () => {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <>
      <PNavbar editActive={editActive}/>
      <PSection  editActive={editActive}>
        <div>
          <h1>Seção 1</h1>
        </div>
      </PSection>
      <PSection  editActive={editActive}>
        <div>
          <h1>Seção 2</h1>
        </div>
      </PSection>
      {editActive && <SectionCreate/>}
      <DivEdit title="Habilitar edição" onClick={() => setEditActive(!editActive)}>
        <EditIcon/>
      </DivEdit>
    </>
  );
};
