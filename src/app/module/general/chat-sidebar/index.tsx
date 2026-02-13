import {type ReactNode} from 'react';
import SearchChat from "./search-chat";
import ChatList from "./chat-list";
import type {IChatSidebarProps} from "./interface.ts";
import cn from "@/app/utils/cn.ts";

const ChatSidebar = ({className, isVisibleInput}: IChatSidebarProps): ReactNode => {
    return (
        <div className={cn(className)}>
            {!isVisibleInput && <SearchChat/>}
            <ChatList/>
        </div>
    );
};

export default ChatSidebar;
