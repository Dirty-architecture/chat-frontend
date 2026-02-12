import {type ReactNode} from 'react';
import type {IChatItemProps} from "./interface.ts";
import {Avatar} from "ui/avatar";
import s from './index.module.scss'

const ChatItem = ({body, login, picture}: IChatItemProps): ReactNode => {
    return (
        <div className={s['chat-item']}>
            <Avatar className={s['chat-item__avatar']} src={picture || undefined} fallback={login.slice(0, 2)}
                    alt="" loading='lazy'/>
            <div className={s['chat-item__content']}>
                <p className={s['chat-item__login']}>{login}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={s['chat-item__text']}>{body}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </div>
    );
};

export default ChatItem;