import type {ReactNode} from "react";

type IModalType = "default" | "confirm" | "custom" | null;

interface IModalState {
    type: IModalType;
    title?: ReactNode;
    content?: ReactNode;
    open: boolean;

    show: (params: {
        type?: IModalType;
        title?: ReactNode;
        content?: ReactNode;
    }) => void;

    hide: () => void;
}


export type {IModalState, IModalType}