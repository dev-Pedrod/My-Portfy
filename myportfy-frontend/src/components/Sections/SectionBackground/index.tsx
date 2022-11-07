import React from "react";

// components
import { SectionContainer } from '../SectionContainer';

// styles
import * as Styled from './style';

type SectionBackgroundProps = {
  children: React.ReactNode;
  id?: string;
  background?: boolean;
}

export const SectionBackground = ({children, id, background = false}: SectionBackgroundProps) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer id={id}>{children}</SectionContainer>
    </Styled.Container>
  );
};
