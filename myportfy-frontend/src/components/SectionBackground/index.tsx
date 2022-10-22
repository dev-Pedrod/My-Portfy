import P from 'prop-types';

// components 
import { SectionContainer } from '../SectionContainer';

// styles
import * as Styled from './SectionBackgroundStyle';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};