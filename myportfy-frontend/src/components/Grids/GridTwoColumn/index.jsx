import P from 'prop-types';

// styles
import * as Styled from './GridTwoColumnStyles';

// components
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, uppercaseTitle, text, component, srcImg, displayNone = false, alt, imgStart = false }) => {
  return (
    <SectionBackground >
      <Styled.Container imgStart={imgStart}>
        <Styled.Column1>
            <Styled.Column1Wrapper>
                <Heading size='big' uppercase={uppercaseTitle}>{title}</Heading>
                <TextComponent>{text}</TextComponent>
                {component}
            </Styled.Column1Wrapper>
        </Styled.Column1>
        <Styled.Column2>
          <Styled.Column2Wrapper>
            <Styled.Image src={srcImg} alt={alt} displayNone={displayNone}/>
          </Styled.Column2Wrapper>
        </Styled.Column2>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string,
  uppercaseTitle: P.bool,
  text: P.string,
  srcImg: P.string,
  alt: P.string,
  imgStart: P.bool,
  displayNone: P.bool,
  component: P.any
};
