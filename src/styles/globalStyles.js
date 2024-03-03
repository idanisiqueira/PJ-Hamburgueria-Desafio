import { createGlobalStyle } from 'styled-components'; // biblioteca de estilização

export default createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    #basic-addon1 { // estilização do ícone do bootstrap nos index.js das páginas
        background: rgba(255,255,255,0.5);
        border: none;
    }

    #basic-addon2 { // estilização do ícone do bootstrap nos index.js das páginas
        background: none;
        border: none;
    }

`