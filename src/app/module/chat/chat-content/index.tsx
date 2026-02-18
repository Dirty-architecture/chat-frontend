import {type ReactNode} from 'react';
import s from './index.module.scss'
import ChatItem from "./chat-item";

const ChatContent = (): ReactNode => {
    return (
        <div className={s['chat__wrapper']}>
            {Array.from({length: 20}).map((_, index) =>
                <ChatItem key={index} id={index.toString()} text={index % 2 ? 'other' : 'me'}
                          user={index % 2 ? 'other' : 'me'}/>
            )}
        </div>
    );
};

export default ChatContent;
