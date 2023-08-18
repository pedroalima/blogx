import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: ${(prop) => prop.theme.colors.secondary};
        font-family: ${(prop => prop.theme.font.primary)};
		color: ${(prop) => prop.theme.colors.primary};
    }
`;