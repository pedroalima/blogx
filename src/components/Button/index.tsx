import * as C from "./style";
import { ButtonType } from "./type";

export const Button = ({ Text, onClick, Type = "button" } : ButtonType) => {
	return (
		<C.Button type={Type} onClick={onClick}>
			{Text}
		</C.Button>
	);
};