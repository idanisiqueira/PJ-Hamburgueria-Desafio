import { createGlobalStyle } from 'styled-components';

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

    #basic-addon1 {
        background: rgba(255,255,255,0.5);
        border: none;
    }

    #basic-addon2 {
        background: none;
        border: none;
    }

`