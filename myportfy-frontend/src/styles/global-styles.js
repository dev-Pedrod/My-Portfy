import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-family: ${({ theme }) => theme.font.family.default};
    }

    html {
        font-size: 62.5%;
    }


    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.font.family.secondary};
    }
`;
