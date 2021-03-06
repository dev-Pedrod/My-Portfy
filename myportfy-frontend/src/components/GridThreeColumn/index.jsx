import P from "prop-types";

// styles
import * as Styled from "./GridThreeColumnStyles";

// components
import { SectionContainer } from "../SectionContainer";

export const GridThreeColumn = ({
  leftComponent,
  middleComponent,
  rightComponent,
}) => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

GridThreeColumn.propTypes = {
  leftComponent: P.any,
  middleComponent: P.any.isRequired,
  rightComponent: P.any,
};
