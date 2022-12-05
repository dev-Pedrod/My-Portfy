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

  function filterIcon(){
    let icons = iconPicker(props);
    if(name.length >= 2){
      return icons.filter((icon) => icon[0].toLowerCase().includes(name.toLowerCase()))
    }
    return icons;
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
            {filterIcon().map((icon) => (
              <Styled.IconDiv>
                {icon[1](props)}
              </Styled.IconDiv>
            ))}
          </Styled.IconsGrid>
        </Styled.IconsWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
