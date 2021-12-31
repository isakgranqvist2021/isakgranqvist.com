import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        width: 100%;
        overflow-x: hidden; 
    }

    p {
        line-height: 1.4;
    }
`;
