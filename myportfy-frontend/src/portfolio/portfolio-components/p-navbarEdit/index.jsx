import React, { useState } from "react";

// components
import { TextComponent } from "../../../components/TextComponent";
import { SketchPicker } from "react-color";
import FontPicker from "font-picker-react";

// Styles
import * as Styled from "./styles";
import {
  CloseIcon,
  HeaderBtn,
  Loading,
  LoadingDiv,
  LoadingText,
} from "../../../components/PostInputModalComponent/PostInputModalStyles";

export const NavbarEdit = ({
  props,
  toggleConfigs,
  setProps,
  imageHandler,
}) => {
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setText] = useState("processando");

  function onChange(ev) {
    const { name, value } = ev.target;
    setProps({ ...props, [name]: value });
  }

  return (
    <>
      <Styled.OptionsDiv>
        <Styled.Header>
          <TextComponent>Editar componente</TextComponent>
          <HeaderBtn onClick={toggleConfigs}>
            <CloseIcon />
          </HeaderBtn>
        </Styled.Header>

        <Styled.Header secondHeader={true}>
          <TextComponent>Editar Logo</TextComponent>
        </Styled.Header>
        <Styled.PropsWrap>
          <Styled.Options>
            <Styled.DivProps>
              <Styled.Labels>Cor:</Styled.Labels>
              <Styled.Color color={props.logoColor} />
              <Styled.Inputs
                placeholder="Cor"
                name="logoColor"
                type="text"
                value={props.logoColor}
                maxLength={16}
                onChange={onChange}
              />
            </Styled.DivProps>

            <Styled.DivProps>
              <Styled.Labels>Tamanho:</Styled.Labels>
              <Styled.Inputs
                name="logoSize"
                type="range"
                value={props.logoSize}
                max={45}
                min={1}
                onChange={onChange}
              />
            </Styled.DivProps>
            <Styled.DivProps>
              <Styled.Labels>Logo:</Styled.Labels>
              <Styled.Inputs
                placeholder="Logo"
                name="logoText"
                type="text"
                value={props.logoText}
                maxLength={16}
                onChange={onChange}
              />
            </Styled.DivProps>
            <Styled.DivProps>
              <Styled.Labels>Imagem:</Styled.Labels>
              <Styled.AddImageBtn>
                {props.logoImg ? 'Alterar logo' : 'Adicionar logo'}
                <Styled.AddImageInput
                  type="file"
                  accept="image/*"
                  title="Clique para adicionar"
                  onChange={imageHandler}
                  onClick={(e) => {
                    e.target.value = null;
                  }}
                />
              </Styled.AddImageBtn>
              {props.logoImg && 
                <Styled.DivIcon onClick={() => setProps({ ...props, logoImg: null })}>
                  <Styled.ImageTrash/>
                </Styled.DivIcon>
              }
            </Styled.DivProps>
            <Styled.DivProps>
              <Styled.Labels>Fonte:</Styled.Labels>                
              <FontPicker
                apiKey="AIzaSyD1nr3aWwysI-vgeGMeAknoG3IU_A8rU9E"
                activeFontFamily={props.logoFont}
                pickerId="logo"
                onChange={(nextFont) => {
                  setProps({ ...props, logoFont: nextFont.family });
                }}
                />
            </Styled.DivProps>
            <Styled.DivProps>
              <Styled.Labels>Negrito:</Styled.Labels>
              <Styled.Inputs
                widthAuto={true}
                name="logoBold"
                type="checkbox"
                checked={props.logoBold}
                onClick={() =>
                  setProps({ ...props, logoBold: !props.logoBold })
                }
              />
            </Styled.DivProps>
            <Styled.DivProps>
              <Styled.Labels>Itálico:</Styled.Labels>
              <Styled.CheckboxDiv>
                <Styled.Inputs
                  widthAuto={true}
                  name="logoItalic"
                  type="checkbox"
                  checked={props.logoItalic}
                  onChange={() => {
                    setProps({ ...props, logoItalic: !props.logoItalic });
                  }}
                />
              </Styled.CheckboxDiv>
            </Styled.DivProps>
          </Styled.Options>
          <Styled.ColorPicker>
            <SketchPicker
              width="auto"
              color={props.logoColor}
              onChange={(color) => setProps({ ...props, logoColor: color.hex })}
            />
          </Styled.ColorPicker>
        </Styled.PropsWrap>

        <Styled.Footer>
          {isLoading ? (
            <LoadingDiv>
              <Loading />
              <LoadingText>{loadingText}</LoadingText>
            </LoadingDiv>
          ) : (
            <Styled.InputButton>Salvar</Styled.InputButton>
          )}
        </Styled.Footer>
      </Styled.OptionsDiv>
      <Styled.Overlay onClick={toggleConfigs} />
    </>
  );
};
