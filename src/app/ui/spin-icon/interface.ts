import type {DetailedHTMLProps, HTMLAttributes} from "react";

interface ISpinIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    paused?: boolean;
}


export type {
    ISpinIconProps
}
