import React, { useState } from "react";

// components
import { PNavbar } from "../../portfolio-components/p-navbar";
import { DivEdit, EditIcon } from "./GenericStyles";

export const GenericTemplate = () => {
  const [editActive, setEditActive] = useState(false);

  return (
    <>
      <PNavbar editActive={editActive}/>
      <DivEdit title="Habilitar edição" onClick={() => setEditActive(!editActive)}>
        <EditIcon/>
      </DivEdit>
    </>
  );
};
