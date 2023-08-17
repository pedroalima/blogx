import { createGlobalStyle } from "styled-components";
import { Theme } from "./type";

export const theme: Theme = {
	colors: {
		primary: "rgb(255, 255, 255)",
		secondary: "rgb(255, 255, 255)",
		tertiary: "rgb(255, 255, 255)",
		quaternary: "rgb(255, 255, 255)",
	},
	font: {
		primary: "Arial, Helvetica, sans-serif",
	},
	fontSize: {
		primary: "20px",
		secondary: "16px",
	},
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: rgb(255, 255, 255);
        font-family: Arial, Helvetica, sans-serif;
    }
`;