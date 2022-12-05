import React, {useState} from "react";

// styles
import * as Styled from "./styles"

// utils
import {iconPicker, IconProps} from "../../utils/icon-picker";

// data
import {packageList} from "./data";

export const IconPicker = (iconProps: IconProps) => {
  const [name, setName] = useState<string>("");
  const [props, setProps] = useState<IconProps>(iconProps);

  function onChange(ev) {
    let {name, value} = ev.target;
    setProps({...props, [name]: value});
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>

        <Styled.SelectDiv>
          <Styled.Select name={'packageName'} onChange={onChange}>
            {packageList.map((pack) => (
              <Styled.SelectOptions value={pack.value}>{pack.title}</Styled.SelectOptions>
            ))}
          </Styled.Select>
        </Styled.SelectDiv>

        <Styled.SearchDiv>
          <Styled.IconSearch/>
          <Styled.Search placeholder="Pesquisar" onChange={(e) => setName(e.target.value)}/>
        </Styled.SearchDiv>
        <Styled.IconsWrapper>
          <Styled.IconsGrid>
            {iconPicker(props).filter((icon) => icon.name.toLowerCase().includes(name.toLowerCase())).map((icon) => (
              <Styled.IconDiv>
                {icon(props)}
              </Styled.IconDiv>
            ))}
          </Styled.IconsGrid>
        </Styled.IconsWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
