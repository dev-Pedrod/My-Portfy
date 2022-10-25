import React from "react";

// styles
import * as Styled from './styles';

// components
import {SectionBackground} from '../../Sections/SectionBackground';
import {Heading} from '../../Heading';
import {TextComponent} from '../../TextComponent';

type GridTwoColumnProps = {
  title?: string;
  uppercaseTitle?: boolean;
  text?: string;
  component: React.ReactNode;
  srcImg: string;
  displayNone?: boolean;
  alt?: string;
  imgStart?: boolean;
}

export const GridTwoColumn = (gridProps: GridTwoColumnProps) => {
  return (
    <SectionBackground>
      <Styled.Container imgStart={gridProps.imgStart ? gridProps.imgStart : false}>
        <Styled.Column1>
          <Styled.Column1Wrapper>
            <Heading size='big' uppercase={gridProps.uppercaseTitle}>{gridProps.title}</Heading>
            <TextComponent>{gridProps.text}</TextComponent>
            {gridProps.component}
          </Styled.Column1Wrapper>
        </Styled.Column1>
        <Styled.Column2>
          <Styled.Column2Wrapper>
            <Styled.Image src={gridProps.srcImg} alt={gridProps.alt}
                          displayNone={gridProps.displayNone ? gridProps.displayNone : false}/>
          </Styled.Column2Wrapper>
        </Styled.Column2>
      </Styled.Container>
    </SectionBackground>
  );
};
