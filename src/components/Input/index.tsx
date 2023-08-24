import { TextField } from "@mui/material";
import { InputType } from "./type";

export const Input = ({ Type, id, placeholder, onChange, value } : InputType) => {
	return (
		<TextField variant="standard" label="Title" type={Type} id={id} onChange={onChange} value={value} placeholder={placeholder} />
	);
};