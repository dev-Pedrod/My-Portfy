import React from 'react'

// styles
import * as Styled from './styles'

export interface ButtonProps {
  children: React.ReactNode;
  background?: boolean;
  to?: string;
  type?: 'link' | 'scroll' | 'default';
}

export const Button = (buttonProps: ButtonProps) => {
  return (
    <>
      {buttonProps.type === 'link' &&
        <Styled.ButtonLink to={buttonProps.to} background={buttonProps.background}>{buttonProps.children}</Styled.ButtonLink>
      }
      {buttonProps.type === 'scroll' &&
        <Styled.ButtonScroll to={buttonProps.to} background={buttonProps.background}>{buttonProps.children}</Styled.ButtonScroll>
      }
      {buttonProps.type === 'default' &&
        <Styled.Button background={buttonProps.background}>{buttonProps.children}</Styled.Button>
      }
    </>
  )
}
