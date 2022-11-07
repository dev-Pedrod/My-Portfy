import styled, {css} from "styled-components";

import {Container as Text} from "../../TextComponent/styles";
import {Title} from "../../Heading/styles";

export const InfoContainer = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    margin: 0 auto;
    text-align: left;

    ${Text} {
      margin-bottom: ${theme.spacings.xlarge};
      max-width: 44rem;
      line-height: 2.4rem;
    }

    ${Title} {
      font-size: ${theme.font.sizes.xxlarge};
      font-family: ${theme.font.family.default};
      margin-bottom: ${theme.spacings.large};
      line-height: 1.1;

      @media ${theme.media.lteMedium} {
        font-size: ${theme.font.sizes.large};
      }
    };
  `}
`;

export const InfoWrapper = styled.div`
  ${({theme}) => css`
    margin-top: -8rem;
    max-width: 54rem;
    padding-top: 0;
    padding-bottom: 6rem;

    @media ${theme.media.lteMedium} {
      margin-top: -4rem;
      max-width: 100%;
    }
  `}
`;

export const TopLine = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.primaryColor_II};
    font-weight: ${theme.font.weight.bold};
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  `}
`;
