import React from "react";

// styles
import * as Styled from "./styles";

type LeftSideProps = {
  firstComponent: React.ReactNode;
  secondComponent?: React.ReactNode;
}

export const LeftSide = ({ firstComponent, secondComponent }: LeftSideProps ) => {
  return (
    <Styled.Container>
      <Styled.ComponentCard>
        {firstComponent}
      </Styled.ComponentCard>

      {secondComponent &&
      <Styled.SecondCard>
        {secondComponent}
      </Styled.SecondCard>
      }
    </Styled.Container>
  );
};
