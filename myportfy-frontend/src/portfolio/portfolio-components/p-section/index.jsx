import React, {useState} from "react";
import P from "prop-types";

// styles
import * as Styled from "./styles";

// components
import {SectionEdit} from "./edit";

export const PSection = ({id, children, editActive}) => {
  const [showConfigs, setShowConfigs] = useState(false);

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

PSection.propTypes = {
  id: P.string,
  children: P.node.isRequired,
  toggle: P.func,
  editActive: P.bool,
};
