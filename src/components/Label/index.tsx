import { LabelType } from "./type";
import * as C from "./style";

export const Label = ({ Text, htmlFor } : LabelType) => {
	return (
		<C.Label htmlFor={htmlFor}>{Text}</C.Label>
	);
}; 