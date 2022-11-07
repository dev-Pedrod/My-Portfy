import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.footer`
  ${({theme}) => css`
    background-color: ${theme.colors.darkBlue};
    cursor: default;

    @media ${theme.media.lteMedium} {
      height: 66rem;
    }
  `}
`;

export const FooterWrap = styled.div`
  ${({theme}) => css`
    padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 110rem;
    margin: 0 auto;
  `}
`;

export const FooterLinksContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 82rem) {
      padding-top: ${theme.spacings.large};
    }
  `}
`;

export const FooterLinksWrapper = styled.div`
  ${({theme}) => css`
    display: flex;

    @media screen and (max-width: 82rem) {
      flex-direction: column;
    }
  `}
`;

export const FooterLinksItems = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${theme.spacings.small};
    text-align: left;
    width: 16rem;
    box-sizing: border-box;
    color: ${theme.colors.white};

    @media screen and (max-width: 42rem) {
      margin: 0;
      padding: 1rem;
      width: 100%;
    }
  `}
`;

export const FooterLinkTitle = styled.h1`
  ${({theme}) => css`
    font-size: 1.4rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const FooterLink = styled.a`
  ${({theme}) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: ${theme.font.sizes.xxsmall};

    &:hover {
      color: ${theme.colors.primaryColor_II};
      transition: 0.3s ease-out;
    }
  `}
`;

export const SocialMedia = styled.section`
  ${({theme}) => css`
    max-width: 100rem;
    width: 100%;
  `}
`;

export const SocialMediaWrap = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 110rem;
    margin: ${theme.spacings.xlarge} auto 0 auto;

    @media screen and (max-width: 82rem) {
      flex-direction: column;
    }
  `}
`;

export const SocialLogo = styled(Link)`
  ${({theme}) => css`
    color: ${theme.colors.white};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
    font-weight: bold;

    &:hover {
      color: ${theme.colors.primaryColor_II};
      transition: 0.3s ease-out;
    }
  `}
`;

export const WebsiteRights = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xxsmall};
    padding: 0 1rem 0 1rem;
  `}
`;

export const SocailIcons = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
  `}
`;

export const SocailIconLink = styled.a`
  ${({theme}) => css`
    color: ${theme.colors.ligthGray};
    font-size: ${theme.font.sizes.medium};
  `}
`;
