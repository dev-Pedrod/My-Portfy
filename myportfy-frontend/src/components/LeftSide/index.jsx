import P from "prop-types";

// styles
import * as Styled from "./LeftSideStyles";

export const LeftSide = ({ firstComponent, secondComponent }) => {
  return (
    <Styled.Container>
      <Styled.ComponentCard>
        {firstComponent}
      </Styled.ComponentCard>

      {secondComponent ?
      <Styled.SecondCard>
        {secondComponent}
      </Styled.SecondCard> :
       <></>
      }
    </Styled.Container>
  );
};

LeftSide.prototype = {
  firstComponent: P.any.isRequired,
  secondComponentComponent: P.any
}