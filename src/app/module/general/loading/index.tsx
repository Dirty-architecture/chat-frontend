import {type ReactNode} from 'react';
import {SpinnerGapIcon} from "@phosphor-icons/react";
import SpinIcon from "ui/spin-icon";
import s from './index.module.scss';
import type {ILoadingProps} from "./interface.ts";
import cn from "@/app/utils/cn.ts";

const ChatListLoading = ({className}: ILoadingProps): ReactNode => {
    return (
        <div className={cn(className, s['root'])}>
            <SpinIcon><SpinnerGapIcon size={64} color="#cf79ce"/></SpinIcon>
        </div>
    );
};

export default ChatListLoading;
