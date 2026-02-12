import {type ReactNode} from 'react';
import SearchChat from "./search-chat";
import ChatList from "./chat-list";

const ChatSidebar = (): ReactNode => {
    return (
        <>
            <SearchChat/>
            <ChatList/>
        </>
    );
};

export default ChatSidebar;
