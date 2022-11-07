import React from "react";

// styles
import * as Styled from "./styles";

// components
import { Heading } from "../../Heading";

type RightSideProps = {
  Title?: string;
  firstComponent: React.ReactNode;
  secondComponent?: React.ReactNode;
}

export const RightSide = ({ Title, firstComponent, secondComponent }: RightSideProps) => {
  return (
    <Styled.Container>
      <Styled.ComponentCard>
        {Title && (
        <Styled.Title>
          <Heading as="h2">{Title}</Heading>
        </Styled.Title>)}
        {firstComponent}
      </Styled.ComponentCard>

      {secondComponent && (
      <Styled.ComponentCard>
        {secondComponent}
      </Styled.ComponentCard>)}

    </Styled.Container>
  );
};

