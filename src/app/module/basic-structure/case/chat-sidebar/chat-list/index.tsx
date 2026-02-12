import type {ReactNode} from 'react';
import ChatItem from "./chat-item";
import style from './index.module.scss'

const ChatList = (): ReactNode => {
    return (
        <div className={style.chatList}>
            {Array.from({length: 23}).map((_, index) => <div>
                <ChatItem key={index} login={'login' + index} body={"sosil"} id={index.toString()}
                          createdAt={new Date()} editedAt={new Date()}/>
            </div>)}
        </div>
    );
};

export default ChatList;
