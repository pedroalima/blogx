import { Button } from "@mui/material";
import { ButtonType } from "./type";

export const ButtonMUI = ({ Text, onClick, Type } : ButtonType) => {
	return (
		<Button variant="contained" type={Type} onClick={onClick}>
			{Text}
		</Button>
	);
};