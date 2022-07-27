import P from "prop-types";

// styles
import * as Styled from "./RightSideStyles";

// components
import { Heading } from "../Heading";

export const RightSide = ({ Title, firstComponent, secondComponent }) => {
  return (
    <Styled.Container>
      <Styled.ComponentCard>
        {Title && (<Styled.Title>
          <Heading as="h2">{Title}</Heading>
        </Styled.Title>)}
        {firstComponent}
      </Styled.ComponentCard>

      {secondComponent && ( <Styled.ComponentCard>
        <Styled.Title>
          <Heading as="h2">{Title}</Heading>
        </Styled.Title>
        {secondComponent}
      </Styled.ComponentCard>)}

    </Styled.Container>
  );
};

RightSide.prototype = {
  Title: P.string,
  firstComponent: P.any.isRequired,
  secondComponentComponent: P.any
}


