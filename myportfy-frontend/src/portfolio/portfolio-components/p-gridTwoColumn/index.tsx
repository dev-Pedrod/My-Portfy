import React from "react";

// styles
import * as Styled from "./styles"

// components
import {SectionBackground} from "../../../components/Sections/SectionBackground";
import {Heading} from "../../../components/Heading";
import {TextComponent} from "../../../components/TextComponent";
import {IconPicker} from "../../../components/IconPicker";

type PGridTwoColumnProps = {
  title?: string;
  uppercaseTitle?: boolean;
  text?: string;
  component?: React.ReactNode;
  srcImg: string;
  displayNone?: boolean;
  alt?: string;
  imgStart?: boolean;
}

export const PGridTwoColumn = (gridProps: PGridTwoColumnProps) => {
  return (
    <SectionBackground>
      <Styled.Container imgStart={gridProps.imgStart ? gridProps.imgStart : false}>
        <Styled.Column1>
          <Styled.Column1Wrapper>
            <Heading size='big' uppercase={gridProps.uppercaseTitle}>{gridProps.title}</Heading>
            <TextComponent>{gridProps.text}</TextComponent>
            {gridProps.component}
            {/*test component*/}
            <IconPicker size={"3rem"} color={"#000000"} packageName={"ai"}/>
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
