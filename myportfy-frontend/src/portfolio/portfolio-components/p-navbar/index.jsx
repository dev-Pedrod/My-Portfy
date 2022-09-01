import React, { useState } from "react";

// Styles
import * as Styled from "./styles";

export const PNavbar = ({ toggle, editActive }) => {
  // Image preview
  const [fileName, setFileName] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [showConfigs, setShowConfigs] = useState(false);
  const [props, setProps] = useState({
    background: "#FFFFFF",
    border: true,
    logoImg: null,
    logoText: "dolla",
    logoFont: "Montserrat",
    logoBold: false,
    logoItalic: false,
    logoColor: "#000000",
    logoSize: 32,
    navTextColor: "#000000",
    sections: ["sobre", "projetos", "referências", "contato"],
  });

  const toggleConfigs = () => {
    setShowConfigs(!showConfigs);
  };

  const imageHandler = (e) => {
    setFileName(e.target.files[0].name);
    setProps({ ...props, logoImg: e.target.files[0] });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(props.logoImg);
  };

  return (
    <>
      <Styled.Nav background={props.background} border={props.border}>
        <Styled.NavbarContainer>
          <Styled.Link to="#">
            <Styled.Logo
              fontFamily={props.logoFont}
              logoBold={props.logoBold}
              logoItalic={props.logoItalic}
              textColor={props.logoColor}
              logoSize={`${props.logoSize}px`}
            >
              {!props.logoImg && props.logoText}
              {!!props.logoImg && (
                <Styled.LogoDiv height={`${props.logoSize / 7.5}rem`}>
                  <Styled.LogoImage src={imagePreview} alt={props.logoText} />
                </Styled.LogoDiv>
              )}
            </Styled.Logo>
          </Styled.Link>

          <Styled.MobileIcon onClick={toggle}>
            <Styled.FaBarsI color={props.logoColor} />
          </Styled.MobileIcon>

          <Styled.NavMenu>
            {props.sections.map((section) => (
              <Styled.NavItem key={section}>
                <Styled.NavLinks
                  textColor={props.navTextColor}
                  textHoverColor={props.logoColor}
                  to={section}
                >
                  {section}
                </Styled.NavLinks>
              </Styled.NavItem>
            ))}
          </Styled.NavMenu>
        </Styled.NavbarContainer>

        {editActive && (
          <Styled.ConfigDiv
            onClick={() => {
              toggleConfigs();
            }}
            color={props.navTextColor}
          >
            <Styled.EditIcon size="2.5rem" />
          </Styled.ConfigDiv>
        )}
      </Styled.Nav>
    </>
  );
};
