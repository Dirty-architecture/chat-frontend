import type {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title?: string;
}


export type {
    IInputProps
}
