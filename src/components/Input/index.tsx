import * as C from "./style";
import { InputType } from "./type";

export const Input = ({ Type, id, placeholder, onChange } : InputType) => {
	return (
		<C.Input type={Type} id={id} onChange={onChange} placeholder={placeholder} />
	);
};