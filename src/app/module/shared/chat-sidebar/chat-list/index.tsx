import {type ReactNode, type RefObject, useRef} from 'react';
import {useVirtualizer} from '@tanstack/react-virtual';
import ChatItem from './chat-item';
import style from './index.module.scss';
import type {IChatListProps} from './interface.ts';
import NavigateToTop from "./navigate-to-top";
import {useScrolledBelowBlock} from "@/app/utils/is-below.ts";
import {useScrollToTop} from "@/app/utils/scroll-to-top.ts";
import useFetchNextPage from "@/app/utils/fetch-next-page.ts";
import ChatListLoading from "@/app/tools/loading";

const Y_PADDING = 16;
const ITEM_SIZE = 48;

const ROW_ESTIMATE_PX = ITEM_SIZE + Y_PADDING;

const SCROLL_BELOW_OFFSET_PX = 40;
const VIRTUAL_OVERSCAN_COUNT = 6;


const ChatList = ({
                      data,
                      isLoading,
                      hasNextPage,
                      isFetchingNextPage,
                      fetchNextPage,
                  }: IChatListProps): ReactNode => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const count = data?.length ?? 0;

    const {isBelow} = useScrolledBelowBlock({rootEl: parentRef.current, offsetPx: SCROLL_BELOW_OFFSET_PX});
    const scrollToBelow = useScrollToTop(parentRef as RefObject<HTMLElement>)


    // eslint-disable-next-line react-hooks/incompatible-library
    const rowVirtualizer = useVirtualizer({
        count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ROW_ESTIMATE_PX,
        overscan: VIRTUAL_OVERSCAN_COUNT,
    });

    const virtualItems = rowVirtualizer.getVirtualItems();

    useFetchNextPage({count, fetchNextPage, hasNextPage, isFetchingNextPage, virtualItems})

    if (isLoading) return <ChatListLoading/>;

    return <div ref={parentRef} className={style.chatList}>
        <div
            style={{
                height: rowVirtualizer.getTotalSize(),
                width: '100%',
                position: 'relative',
            }}
        >
            {virtualItems.map((virtualRow) => {
                const item = data?.[virtualRow.index];
                if (!item) return null;

                return (
                    <ChatItem key={item.id} transformY={virtualRow.start} {...item} />
                );
            })}
        </div>
        {isBelow && <NavigateToTop scrollToBelow={scrollToBelow}/>}
    </div>
};

export default ChatList;
