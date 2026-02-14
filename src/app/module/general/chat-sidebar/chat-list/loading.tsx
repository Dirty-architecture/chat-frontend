import {type ReactNode} from 'react';
import {SpinnerGapIcon} from "@phosphor-icons/react";
import SpinIcon from "ui/spin-icon";
import s from './loading.module.scss';

const ChatListLoading = (): ReactNode => {
    return (
        <div className={s['root']}>
            <SpinIcon><SpinnerGapIcon size={64} color="#cf79ce"/></SpinIcon>
        </div>
    );
};

export default ChatListLoading;
