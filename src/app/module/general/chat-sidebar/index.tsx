import {type ReactNode} from 'react';
import SearchChat from "./search-chat";
import ChatList from "./chat-list";
import type {IChatSidebarProps} from "./interface.ts";
import cn from "@/app/utils/cn.ts";
import {useGetAllChatSideBarPresenter} from "@/app/module/general/chat-sidebar/case/presenter.ts";

const ChatSidebar = ({className}: IChatSidebarProps): ReactNode => {
    const {data} = useGetAllChatSideBarPresenter()

    return (
        <div className={cn(className)}>
            <SearchChat/>
            <ChatList data={data} length={data?.length || 0}/>
        </div>
    );
};

export default ChatSidebar;
