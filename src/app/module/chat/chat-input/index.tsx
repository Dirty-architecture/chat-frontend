import {type ReactNode} from 'react';
import Input from "ui/input";
import {IconButton} from "ui/icon-button";
import {PaperPlaneTiltIcon} from "@phosphor-icons/react";
import s from './index.module.scss'

const ChatInput = (): ReactNode => {
    return (
        <div className={s['chat__bottombar']}>
            <Input labelClassName={s['chat__input']}/> <IconButton><PaperPlaneTiltIcon/></IconButton>
        </div>
    );
};

export default ChatInput;
