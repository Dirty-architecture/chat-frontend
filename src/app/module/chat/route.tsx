import type {ReactNode} from 'react';
import ChatTopBar from "./chat-top-bar";
import ChatContent from "@/app/module/chat/chat-content";
import s from './index.module.scss'
import ChatInput from "@/app/module/chat/chat-input";

const ChatRoute = (): ReactNode => {
    return (
        <div className={s['chat__wrapper']}>
            <ChatTopBar/>
            <ChatContent/>
            <ChatInput/>
        </div>
    );
};

export default ChatRoute;
