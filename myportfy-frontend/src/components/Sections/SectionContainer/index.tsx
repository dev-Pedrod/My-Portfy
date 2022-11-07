import React from "react";

// styles
import * as Styled from './styles';

type SectionProps = {
  children: React.ReactNode;
  id: string;
}

export const SectionContainer = ({children, id}: SectionProps) => {
  return <Styled.Container id={id}>{children}</Styled.Container>;
};
