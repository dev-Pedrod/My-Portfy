import React, { useState } from "react";

// components
import FontPicker from "font-picker-react";
import { SketchPicker } from "react-color";
import { TextComponent } from "../../../components/TextComponent";

// Styles
import {
  CloseIcon,
  HeaderBtn,
  Loading,
  LoadingDiv,
  LoadingText,
} from "../../../components/PostInputModalComponent/PostInputModalStyles";
import * as Styled from "./styles";

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
        <Styled.PropsContainer>

          {/* EDIT LOGO */}

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
                
                <Styled.AddImageInput
                    type="file"
                    accept="image/*"
                    title="Clique para adicionar"
                    onChange={imageHandler}
                    onClick={(e) => {
                      e.target.value = null;
                    }}
                  />
                {props.logoImg && (
                  <Styled.DivIcon
                    title="Clique para remover"
                    onClick={() => setProps({ ...props, logoImg: null })}
                  >
                    <Styled.ImageTrash />
                  </Styled.DivIcon>
                )}
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
                onChange={(color) =>
                  setProps({ ...props, logoColor: color.hex })
                }
              />
            </Styled.ColorPicker>
          </Styled.PropsWrap>

          {/* EDIT LINKS */}

          <Styled.Header secondHeader={true} borderTop={true}>
            <TextComponent>Editar Links</TextComponent>
          </Styled.Header>
          <Styled.PropsWrap>
            <Styled.Options>
              <Styled.DivProps>
                <Styled.Labels>Cor:</Styled.Labels>
                <Styled.Color color={props.navTextColor} />
                <Styled.Inputs
                  placeholder="Cor"
                  name="navTextColor"
                  type="text"
                  value={props.navTextColor}
                  maxLength={16}
                  onChange={onChange}
                />
              </Styled.DivProps>
              <Styled.DivProps>
                <Styled.Labels>Fonte:</Styled.Labels>
                <FontPicker
                  apiKey="AIzaSyD1nr3aWwysI-vgeGMeAknoG3IU_A8rU9E"
                  activeFontFamily={props.linkFont}
                  pickerId="links"
                  onChange={(nextFont) => {
                    setProps({ ...props, linkFont: nextFont.family });
                  }}
                />
              </Styled.DivProps>
              <Styled.DivProps>
                <Styled.Labels>Negrito:</Styled.Labels>
                <Styled.Inputs
                  widthAuto={true}
                  name="linkBold"
                  type="checkbox"
                  checked={props.linkBold}
                  onClick={() =>
                    setProps({ ...props, linkBold: !props.linkBold })
                  }
                />
              </Styled.DivProps>
              <Styled.DivProps>
                <Styled.Labels>Itálico:</Styled.Labels>
                <Styled.CheckboxDiv>
                  <Styled.Inputs
                    widthAuto={true}
                    name="linkItalic"
                    type="checkbox"
                    checked={props.linkItalic}
                    onChange={() => {
                      setProps({ ...props, linkItalic: !props.linkItalic });
                    }}
                  />
                </Styled.CheckboxDiv>
              </Styled.DivProps>
            </Styled.Options>
            <Styled.ColorPicker>
              <SketchPicker
                width="auto"
                color={props.navTextColor}
                onChange={(color) =>
                  setProps({ ...props, navTextColor: color.hex })
                }
              />
            </Styled.ColorPicker>
          </Styled.PropsWrap>

          {/* EDIT NAVBART*/}

          <Styled.Header secondHeader={true} borderTop={true}>
            <TextComponent>Editar Navbar</TextComponent>
          </Styled.Header>
          <Styled.PropsWrap>
            <Styled.Options>
              <Styled.DivProps>
                <Styled.Labels>Cor:</Styled.Labels>
                <Styled.Color color={props.background} />
                <Styled.Inputs
                  placeholder="Cor"
                  name="background"
                  type="text"
                  value={props.background}
                  maxLength={16}
                  onChange={onChange}
                />
              </Styled.DivProps>
              <Styled.DivProps>
                <Styled.Labels>Borda:</Styled.Labels>
                <Styled.Inputs
                  widthAuto={true}
                  name="border"
                  type="checkbox"
                  checked={props.border}
                  onClick={() =>
                    setProps({ ...props, border: !props.border })
                  }
                />
              </Styled.DivProps>
              <Styled.DivProps>
                <Styled.Labels>Fundo:</Styled.Labels>
                <Styled.CheckboxDiv>
                  <Styled.Inputs
                    widthAuto={true}
                    name="NavbarTransparent"
                    type="checkbox"
                    checked={props.NavbarTransparent}
                    onChange={() => {
                      setProps({ ...props, NavbarTransparent: !props.NavbarTransparent });
                    }}
                  />
                </Styled.CheckboxDiv>
              </Styled.DivProps>
            </Styled.Options>
            <Styled.ColorPicker>
              <SketchPicker
                width="auto"
                color={props.background}
                onChange={(color) =>
                  setProps({ ...props, background: color.hex })
                }
              />
            </Styled.ColorPicker>
          </Styled.PropsWrap>
        </Styled.PropsContainer>

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
