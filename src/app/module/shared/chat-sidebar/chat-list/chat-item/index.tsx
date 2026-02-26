import {memo, type ReactNode} from 'react';
import {Avatar} from "ui/avatar";
import s from './index.module.scss'
import {Link} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import {replaceArgs} from "@/app/utils/replace-args.ts";
import type {IChatItemProps} from "./interface.ts";

const ChatItem = memo(({body, login, picture, id, transformY}: IChatItemProps): ReactNode => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                transform: `translateY(${transformY}px)`,
            }}
        >
            <Link to={replaceArgs(ROUTER_PATH.CHAT, {":id": id})} className={s['chat-item']}>
                <Avatar className={s['chat-item__avatar']} src={picture || undefined} fallback={login.slice(0, 2)}
                        alt="" loading='lazy'/>
                <div className={s['chat-item__content']}>
                    <p className={s['chat-item__login']}>{login}</p>
                    {body && <p className={s['chat-item__text']}>{body}</p>}
                </div>
            </Link>
        </div>

    );
});

export default ChatItem;