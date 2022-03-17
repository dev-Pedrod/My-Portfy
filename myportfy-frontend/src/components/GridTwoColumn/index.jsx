import P from 'prop-types';
import * as Styled from './GridTwoColumnStyles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, uppercaseTitle, text, component, srcImg, background = false, imgStart = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background} imgStart={imgStart}>
        <Styled.Column1>
            <Styled.Column1Wrapper>
                <Heading size='big' uppercase={uppercaseTitle}>{title}</Heading>
                <TextComponent>{text}</TextComponent>
                {component}
            </Styled.Column1Wrapper>
        </Styled.Column1>
        <Styled.Column2>
          <Styled.Column2Wrapper>
            <Styled.Image src={srcImg} alt={title} />
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
  background: P.bool,
  imgStart: P.bool,
  component: P.any
};