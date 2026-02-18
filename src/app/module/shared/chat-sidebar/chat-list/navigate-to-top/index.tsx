import {type ReactNode} from 'react';
import s from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {CaretUpIcon} from "@phosphor-icons/react";
import type {INavigateToTopProps} from "./interface.ts";

const NavigateToTop = ({scrollToBelow}: INavigateToTopProps): ReactNode => {
    return (
        <IconButton onClick={scrollToBelow} size={40} className={s['to-top']}>
            <CaretUpIcon/>
        </IconButton>
    );
};

export default NavigateToTop;
