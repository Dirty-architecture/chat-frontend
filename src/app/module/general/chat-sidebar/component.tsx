import {type ReactNode} from 'react';
import SearchChat from "./search-chat";
import ChatList from "./chat-list";
import type {IChatSidebarProps} from "./interface.ts";
import cn from "@/app/utils/cn.ts";
import {useGetAllChatSideBarPresenter} from "./case/get-all/presenter.ts";
import s from './index.module.scss'
import {useForm, useWatch} from "react-hook-form";
import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import {useSearchChatSideBarPresenter} from "@/app/module/general/chat-sidebar/case/search/presenter.ts";

const ChatSidebar = ({className}: IChatSidebarProps): ReactNode => {
    const form = useForm<ISearchChatListPort>()
    const search = useWatch({
        control: form.control,
        name: 'search'
    })
    const {data: dataGetAll, isLoading: isLoadingGetAll} = useGetAllChatSideBarPresenter();
    const {
        data: dataSearch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading: isLoadingSearch,
    } = useSearchChatSideBarPresenter(search);

    const itemsSearch = dataSearch?.pages.flatMap((p) => p.items) ?? [];

    const isSearchMode = Boolean(search);

    return (
        <div className={cn(className, s["sidebar-wrapper"])}>
            <SearchChat form={form}/>
            <ChatList
                isLoading={isSearchMode ? isLoadingSearch : isLoadingGetAll}
                data={isSearchMode ? itemsSearch : dataGetAll?.items}
                fetchNextPage={isSearchMode ? fetchNextPage : undefined}
                hasNextPage={isSearchMode ? hasNextPage : undefined}
                isFetchingNextPage={isSearchMode ? isFetchingNextPage : undefined}
            />
        </div>
    );
};

export default ChatSidebar;
