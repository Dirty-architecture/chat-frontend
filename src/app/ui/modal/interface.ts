import type {ReactNode} from "react";

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;

    title?: ReactNode;
    children?: ReactNode;

    className?: string;
    contentClassName?: string;

    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
}
 

export type {
    IModalProps
}
