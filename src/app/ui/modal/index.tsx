import type {MouseEvent, ReactNode} from "react";
import styles from "./index.module.scss";
import cn from "../../utils/cn";
import DimWrapper from "../dim-wrapper";
import {IconButton} from "ui/icon-button";
import {XIcon} from "@phosphor-icons/react";
import type {IModalProps} from "./interface.ts";
import {createPortal} from "react-dom";


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

    if (typeof document === "undefined") return null;

    const handleOverlayMouseDown = (): void => {
        if (!closeOnOverlayClick) return;
        onClose();
    };

    const handleContentMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    };

    return createPortal(
        <div
            className={cn(styles.modal, className)}
            onMouseDown={handleOverlayMouseDown}
            role="dialog"
            aria-modal="true"
        >
            <DimWrapper
                className={cn(styles["modal__content"], contentClassName)}
                onMouseDown={handleContentMouseDown}
            >
                <div className={styles["modal__header"]}>
                    {title ? <div className={styles["modal__title"]}>{title}</div> : <div/>}
                    <IconButton
                        className={styles["modal__close-btn"]}
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <XIcon/>
                    </IconButton>
                </div>

                <div className={styles["modal__body"]}>
                    {children}
                </div>
            </DimWrapper>
        </div>,
        document.body
    );
};

export default Modal;