import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

// types
import {Navbar} from "../../../types/navbar";

// api
import {api} from "../../../api/api";

// components
import {NavbarEdit} from "./edit";

// Styles
import * as Styled from "./styles";

type PNavbarProps = {
  toggle?: Function,
  editActive: boolean
}

export const PNavbar = ({toggle, editActive}: PNavbarProps) => {
  const {id} = useParams();
  const [showConfigs, setShowConfigs] = useState<boolean>(false);
  const [props, setProps] = useState<Navbar>({
    background: "#fcfcfc",
    hasBackground: true,
    border: true,
    shadow: true,
    navJustifyContent: "space-between",
    navTextColor: "#000000",
    linkBorderColor: "#000000",
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

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProps({...props, logoImg: reader.result.toString()});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Styled.Nav
        background={props.hasBackground ? props.background : "transparent"}
        border={props.border} shadow={props.shadow}
      >
        <Styled.NavbarContainer justifyContent={props.navJustifyContent}>
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
                  <Styled.LogoImage src={props.logoImg} alt={props.logoText}/>
                </Styled.LogoDiv>
              )}
            </Styled.Logo>
          </Styled.Link>

          <Styled.MobileIcon onClick={() => toggle()}>
            <Styled.FaBarsI color={props.logoColor}/>
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
          <Styled.EditIcon
            size="2.5rem"
            onClick={() => toggleConfigs()}/>
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
