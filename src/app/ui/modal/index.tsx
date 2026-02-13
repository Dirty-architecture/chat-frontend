import type {MouseEvent, ReactNode} from "react";
import styles from "./index.module.scss";
import cn from "../../utils/cn";
import DimWrapper from "../dim-wrapper";
import {IconButton} from "ui/icon-button";
import {XIcon} from "@phosphor-icons/react";
import type {IModalProps} from "./interface.ts";


const Modal = ({
                   isOpen,
                   onClose,
                   title,
                   children,
                   className,
                   contentClassName,
                   closeOnOverlayClick = true,
               }: IModalProps): ReactNode => {
    if (!isOpen) return null;

    const handleOverlayMouseDown = (): void => {
        if (!closeOnOverlayClick) return;
        onClose();
    };

    const handleContentMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    };

    return (
        <div
            className={cn(styles.overlay, className)}
            onMouseDown={handleOverlayMouseDown}
            role="dialog"
            aria-modal="true"
        >
            <DimWrapper
                className={cn(styles.content, contentClassName)}
                onMouseDown={handleContentMouseDown}
            >
                <div className={styles.header}>
                    {title ? <div className={styles.title}>{title}</div> : <div/>}
                    <IconButton className={styles.closeBtn} type="button" onClick={onClose} aria-label="Close modal">
                        <XIcon/>
                    </IconButton>
                </div>

                <div className={styles.body}>
                    {children}
                </div>
            </DimWrapper>
        </div>
    );
};

export default Modal;