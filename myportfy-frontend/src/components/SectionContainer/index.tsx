import P from 'prop-types';

// styles
import * as Styled from './SectionContainerStyles';

export const SectionContainer = ({ children, id }) => {
  return <Styled.Container id={id}>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
  id: P.string
};