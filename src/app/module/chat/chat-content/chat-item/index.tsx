import {memo, type ReactNode} from 'react';
import type {IMessageEntities} from './interface.ts';
import s from './index.module.scss';

const ChatItem = memo(({text, user}: IMessageEntities): ReactNode => {
    const isMe = user === 'me';

    return (
        <div
            className={[
                s['chat-item'],
                s[isMe ? 'chat-item--me' : 'chat-item--other'],
            ].join(' ')}
        >
            <div
                className={[
                    s['chat-item__bubble'],
                    s[isMe ? 'chat-item__bubble--me' : 'chat-item__bubble--other'],
                ].join(' ')}
            >
                {text}
            </div>
        </div>
    );
});

ChatItem.displayName = 'ChatItem';

export default ChatItem;