import React from 'react'

// styles
import * as Styled from './styles'

type ButtonProps = {
  children: React.ReactNode;
  background?: boolean;
  to?: string;
  type?: 'link' | 'scroll' | 'default';
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Button = ({children, background = true, to, type = 'default', onClick}: ButtonProps) => {
  return (
    <>
      {type === 'link' &&
        <Styled.ButtonLink to={to} background={background}>{children}</Styled.ButtonLink>
      }
      {type === 'scroll' &&
        <Styled.ButtonScroll to={to} background={background}>{children}</Styled.ButtonScroll>
      }
      {type === 'default' &&
        <Styled.Button background={background} onClick={onClick}>{children}</Styled.Button>
      }
    </>
  )
}
