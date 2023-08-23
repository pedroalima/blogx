import { FormEventHandler } from "react";

export interface InputType {
    Type?: string;
    id?: string;
    placeholder?: string;
    value: string;
    onChange?: FormEventHandler;
}