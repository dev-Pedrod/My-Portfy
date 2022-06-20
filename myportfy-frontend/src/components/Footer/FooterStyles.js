import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    background-color: #101522;

    @media ${theme.media.lteMedium} {
      height: 66rem;
    }
  `}
`;

export const FooterWrap = styled.div`
  ${({ theme }) => css`
    padding: 4.8rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 110rem;
    margin: 0 auto;
  `}
`;

export const FooterLinksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 82rem){
        padding-top: 3.2rem;
    }
  `}
`; 

export const FooterLinksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    @media screen and (max-width: 82rem){
        flex-direction: column;
    }
  `}
`; 

export const FooterLinksItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.6rem;
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
  ${({ theme }) => css`
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
  `}
`;

export const FooterLink = styled.a`
  ${({ theme }) => css`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;

    &:hover {
        color: ${theme.colors.primaryColor_II};
        transition: 0.3s ease-out;
    }
  `}
`;

export const SocialMedia = styled.section`
  ${({ theme }) => css`
    max-width: 100rem;
    width: 100%;
  `}
`;

export const SocialMediaWrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 110rem;
    margin: 4rem auto 0 auto;

    @media screen and (max-width: 82rem) {
        flex-direction: column;
    }
  `}
`;

export const SocialLogo = styled.a`
  ${({ theme }) => css`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
  `}
`;

export const WebsiteRights = styled.p`
  ${({ theme }) => css`
    color: #fff;
    margin-bottom: 16px;
    font-size: 12px;
    padding: 0 10px 0 10px;
  `}
`;

export const SocailIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  `}
`;

export const SocailIconLink = styled.a`
  ${({ theme }) => css`
    color: #fff;
    font-size: 24px;
  `}
`;