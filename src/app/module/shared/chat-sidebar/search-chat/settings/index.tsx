import {type ReactNode} from 'react';
import {Avatar} from "ui/avatar";
import s from './index.module.scss'
import ChangePassword from "./change-password";
import {SignOutIcon} from "@phosphor-icons/react";
import {IconButton} from "ui/icon-button";

const SettingsModal = (): ReactNode => {
    return (
        <div className={s['settings-modal']}>
            <div className={s['settings-avatar']}>
                <Avatar size={102} src='https://avatars.githubusercontent.com/u/72372517?v=4' fallback='username'/>
                <h3>username</h3>
            </div>
            <h2>Смена пароля</h2>
            <ChangePassword/>


            <div className={s['settings-bottom']}>
                <IconButton variant='primary'><SignOutIcon/></IconButton>
                <div className={s['settings-link']}>
                    <a target='_blank' href='https://github.com/Dirty-architecture/chat-frontend'>github</a>
                    <a target='_blank' href='https://github.com/Dirty-architecture/chat-frontend/issues'>bugs</a>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
