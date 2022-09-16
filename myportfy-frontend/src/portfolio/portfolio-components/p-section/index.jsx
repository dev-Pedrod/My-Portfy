import P from "prop-types";

// styles
import * as Styled from "./styles";

export const PSection = ({ children, id }) => {
  return (
    <Styled.Container id={id}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Container>
  );
};

PSection.propTypes = {
  children: P.node.isRequired,
  id: P.string,
};
