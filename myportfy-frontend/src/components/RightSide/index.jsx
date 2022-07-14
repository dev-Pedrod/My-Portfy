import P from "prop-types";

// styles
import * as Styled from "./ColumnRightStyles";

// components
import { Heading } from "../Heading";

export const Rightside = ({ Title, firstComponent, secondComponent }) => {
  return (
    <Styled.Container>
      <Styled.ComponentCard>
        <Styled.Title>
          <Heading as="h2">{Title}</Heading>
        </Styled.Title>
        {firstComponent}
      </Styled.ComponentCard>

      {secondComponent? <Styled.ComponentCard>
        <Styled.Title>
          <Heading as="h2">{Title}</Heading>
        </Styled.Title>
        {secondComponent}
      </Styled.ComponentCard> : <></>}

    </Styled.Container>
  );
};

Rightside.prototype = {
  Title: P.string,
  firstComponent: P.any.isRequired,
  secondComponentComponent: P.any
}


