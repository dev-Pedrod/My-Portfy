import P from 'prop-types';

// styles
import * as Styled from './SectionContainerStyles';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};