import React, {useState} from "react";

// styles
import * as Styled from "./styles";

// components
import {SectionEdit} from "./edit";

type PSectionProps = {
  id?: string | undefined,
  children: React.ReactNode,
  editActive: boolean,
}

export const PSection = ({id, children, editActive}: PSectionProps) => {
  const [showConfigs, setShowConfigs] = useState<boolean>(false);

  const toggleConfigs = () => {
    setShowConfigs(!showConfigs);
  };

  return (
    <>
      <SectionEdit isOpen={showConfigs} toggle={toggleConfigs}/>
      <Styled.Container id={id} isOpen={showConfigs}>
        <Styled.Wrapper>{children}</Styled.Wrapper>
        {editActive && (
          <Styled.EditIcon
            size="2.5rem"
            onClick={() => {
              toggleConfigs();
            }}/>
        )}
      </Styled.Container>
    </>
  );
};
