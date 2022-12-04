import {createGlobalStyle, css} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({theme}) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: ${({theme}) => theme.font.sizes.small};
      font-family: ${({theme}) => theme.font.family.default};
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        width: 1rem;
      }

      ::-webkit-scrollbar-track {
        background: ${theme.colors.ligthGray};
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.mediumGray};
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.Gray};
      }
    }

    html {
      font-size: 62.5%;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${({theme}) => theme.font.family.secondary};
    }

  `}
`;
