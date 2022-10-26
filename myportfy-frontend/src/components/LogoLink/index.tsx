// components
import { Heading } from '../Heading';

// styles
import * as Styled from './style';

type LogoLinkProps = {
  text: string
  srcImg?: string,
  link?: string;
}

export const LogoLink = ({ text, srcImg, link }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container to={link} onClick={() => window.scrollTo(0, 0)}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
