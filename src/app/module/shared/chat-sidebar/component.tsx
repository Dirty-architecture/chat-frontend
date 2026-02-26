import {type ReactNode} from 'react';
import SearchChat from "./search-chat";
import ChatList from "./chat-list";
import type {IChatSidebarProps} from "./interface.ts";
import cn from "@/app/utils/cn.ts";
import s from './index.module.scss'
import {useForm, useWatch} from "react-hook-form";
import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import {useSearchChatSideBarPresenter} from "./case/presenter.ts";
import ErrorBoundary from "@/app/tools/error-boundary";

const ChatSidebar = ({className}: IChatSidebarProps): ReactNode => {
    const form = useForm<ISearchChatListPort>()

    const search = useWatch({
        control: form.control,
        name: 'search'
    })?.trim()

    const {
        data,
        debouncedSearch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useSearchChatSideBarPresenter(search);

    const items = data?.pages.flatMap((page) => page.items) ?? [];

    return (
        <ErrorBoundary>
            <div className={cn(className, s["sidebar-wrapper"])}>
                <SearchChat form={form}/>
                <ChatList
                    key={debouncedSearch}
                    isLoading={isLoading}
                    data={items}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                />
            </div>
        </ErrorBoundary>
    );
};

export default ChatSidebar;
