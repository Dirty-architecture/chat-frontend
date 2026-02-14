import type {ReactNode} from "react";


interface IModalState {
    title?: ReactNode;
    content?: ReactNode;
    open: boolean;

    show: (params: {
        title?: ReactNode;
        content?: ReactNode;
    }) => void;

    hide: () => void;
}


export type {IModalState}