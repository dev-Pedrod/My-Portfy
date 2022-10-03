import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// api
import { api } from "../../../api/api";

// components
import { NavbarEdit } from "../p-navbarEdit";

// Styles
import * as Styled from "./styles";

export const PNavbar = ({ toggle, editActive }) => {
  const { id } = useParams();

  const [showConfigs, setShowConfigs] = useState(false);
  const [props, setProps] = useState({
    background: "#fcfcfc",
    hasBackground: true,
    border: true,
    navTextColor: "#000000",
    linkBorderColor: "red",
    linkBold: false,
    linkItalic: false,
    linkSize: 18,
    linkFont: "Montserrat",
    logoImg: null,
    logoText: "dolla",
    logoFont: "Montserrat",
    logoBold: false,
    logoItalic: false,
    logoColor: "#000000",
    logoSize: 32,
    sections: ["sobre", "projetos", "referências", "contato"],
  });

  // test
  useEffect(() => {
      api.get(`/templates/${id}`).then((response) => {
        setProps(response.data.navbar);
      });
  }, [id]);

  const toggleConfigs = () => {
    setShowConfigs(!showConfigs);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProps({ ...props, logoImg: reader.result});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Styled.Nav
        background={props.hasBackground ? props.background : "transparent"}
        border={props.border}
      >
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
                  <Styled.LogoImage src={props.logoImg} alt={props.logoText} />
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
                  fontFamily={props.linkFont}
                  linkBold={props.linkBold}
                  linkItalic={props.linkItalic}
                  textColor={props.navTextColor}
                  linkBorderColor={props.linkBorderColor}
                  linkSize={`${props.linkSize}px`}
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

      {showConfigs && editActive && (
        <NavbarEdit
          props={props}
          setProps={setProps}
          toggleConfigs={toggleConfigs}
          imageHandler={imageHandler}
        />
      )}
    </>
  );
};
