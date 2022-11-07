import React from "react";

// styles
import * as Styled from "./styles";

type GridThreeColumnProps = {
  leftComponent?: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const GridThreeColumn = ({leftComponent, middleComponent, rightComponent}: GridThreeColumnProps) => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Column1>
          <Styled.Column1Wrapper>
            {leftComponent}
          </Styled.Column1Wrapper>
        </Styled.Column1>

        <Styled.Column2>
          <Styled.Column2Wrapper>
            {middleComponent}
          </Styled.Column2Wrapper>
        </Styled.Column2>

        <Styled.Column3>
          <Styled.Column3Wrapper>
            {rightComponent}
          </Styled.Column3Wrapper>
        </Styled.Column3>
      </Styled.Container>
    </Styled.Section>
  );
};
