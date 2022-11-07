import React from "react";

// styles
import * as Styled from './styles';

type NavLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
}

export const NavLink = ({ children, link, newTab = false }: NavLinkProps) => {
  return (
    <Styled.Container href={link} target={newTab ? '_blank' : '_self'}>
      {children}
    </Styled.Container>
  );
};
