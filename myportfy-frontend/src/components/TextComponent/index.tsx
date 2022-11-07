import React from "react";

// styles
import * as Styled from './styles';

type TextProps = {
  children: React.ReactNode;
}

export const TextComponent = ({children}: TextProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
