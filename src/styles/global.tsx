import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${(prop => prop.theme.font.primary)};
    }

    body {
        width: 100%;
        height: 100vh;
        background: ${(prop) => prop.theme.colors.secondary};
		color: ${(prop) => prop.theme.colors.primary};
    }
`;