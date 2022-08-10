import P from 'prop-types';

// components
import { Heading } from '../Heading';

// styles
import * as Styled from './LogoLinkStyle';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container to={link} onClick={() => window.scrollTo(0, 0)}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};