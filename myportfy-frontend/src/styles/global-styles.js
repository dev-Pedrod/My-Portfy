import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Rubik+Mono+One&family=Teko:wght@300&display=swap');

    :root {
        --primary-font: 'Montserrat', sans-serif;
        --secondary-font: 'Rubik Mono One', sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--secondary-font);
    }
    
`