import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
}

.interface{
    max-width: 1280px;
    margin: 0 auto;
}

html{
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.flex{
    display: flex;
}

:root{
    --azul-logo: #0000FF;
}


`

export default GlobalStyle