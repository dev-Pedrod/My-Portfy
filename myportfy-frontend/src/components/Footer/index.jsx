import React from 'react'

// styles
import * as Styled from './FooterStyles'

// icons
import {FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Styled.FooterContainer>
        <Styled.FooterWrap>
            <Styled.FooterLinksContainer>
                <Styled.FooterLinksWrapper>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Sobre Nós</Styled.FooterLinkTitle>
                        <Styled.FooterLink href='https://www.linkedin.com/in/pedrooliveiradev/' target={"_blank"}>...</Styled.FooterLink>
                        <Styled.FooterLink href='https://github.com/dev-Pedrod' target={"_blank"}>...</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Fale Conosco</Styled.FooterLinkTitle>
                        <Styled.FooterLink to="/">...</Styled.FooterLink>
                        <Styled.FooterLink to="/">...</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Desenvolvedor</Styled.FooterLinkTitle>
                        <Styled.FooterLink href='https://www.linkedin.com/in/pedrooliveiradev/' target={"_blank"}> Linkedin</Styled.FooterLink>
                        <Styled.FooterLink href='https://github.com/dev-Pedrod' target={"_blank"}> Github</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Projeto</Styled.FooterLinkTitle>
                        <Styled.FooterLink href='https://github.com/dev-Pedrod/My-Portfy' target={"_blank"}> Código-fonte</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                </Styled.FooterLinksWrapper>
            </Styled.FooterLinksContainer>
            <Styled.SocialMedia>
                <Styled.SocialMediaWrap>
                    <Styled.SocialLogo to="/">MyPortfy</Styled.SocialLogo>
                    <Styled.WebsiteRights>MyPortfy © {new Date().getFullYear()} All rights reserved
                    </Styled.WebsiteRights>
                    <Styled.SocailIcons>
                        <Styled.SocailIconLink href='https://www.linkedin.com/in/pedrooliveiradev/' target={"_blank"} >
                            <FaLinkedin/>
                        </Styled.SocailIconLink>
                        <Styled.SocailIconLink href='https://github.com/dev-Pedrod' target={"_blank"} >
                            <FaGithub/>
                        </Styled.SocailIconLink>
                    </Styled.SocailIcons>
                </Styled.SocialMediaWrap>
            </Styled.SocialMedia>
        </Styled.FooterWrap>
    </Styled.FooterContainer>
  )
}
