import {type ReactNode, useEffect, useMemo, useRef} from 'react';
import {useVirtualizer} from '@tanstack/react-virtual';
import ChatItem from './chat-item';
import style from './index.module.scss';
import type {IChatListProps} from './interface.ts';
import ChatListLoading from "./loading.tsx";
import NavigateToTop from "./navigate-to-top";
import {useScrolledBelowBlock} from "@/app/utils/is-below.ts";

const Y_PADDING = 16;
const ITEM_SIZE = 48;

const ROW_ESTIMATE_PX = ITEM_SIZE + Y_PADDING;

const SCROLL_TO_TOP_PX = 0;
const SCROLL_BELOW_OFFSET_PX = 40;
const VIRTUAL_OVERSCAN_COUNT = 6;

const FETCH_NEXT_PAGE_THRESHOLD_FROM_END = 3;

//!isLoading нужен для того чтоб в начале был большой блок а потом лоудер
const ChatList = ({
                      data,
                      isLoading,
                      hasNextPage,
                      isFetchingNextPage,
                      fetchNextPage,
                  }: IChatListProps): ReactNode => {
    const parentRef = useRef<HTMLDivElement | null>(null);

    const {isBelow} = useScrolledBelowBlock({rootEl: parentRef.current, offsetPx: SCROLL_BELOW_OFFSET_PX});
    const scrollToBelow = () => {
        parentRef.current?.scroll({behavior: "smooth", top: SCROLL_TO_TOP_PX})
    }

    const count = useMemo(() => data?.length ?? 0, [data?.length]);

    const rowVirtualizer = useVirtualizer({
        count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ROW_ESTIMATE_PX,
        overscan: VIRTUAL_OVERSCAN_COUNT,
    });

    const virtualItems = rowVirtualizer.getVirtualItems();

    useEffect(() => {
        if (!fetchNextPage) return;
        if (!hasNextPage) return;
        if (isFetchingNextPage) return;
        if (!virtualItems.length) return;

        const lastVirtualItem = virtualItems[virtualItems.length - 1];
        const isNearEnd = lastVirtualItem.index >= count - FETCH_NEXT_PAGE_THRESHOLD_FROM_END;

        if (isNearEnd) fetchNextPage();
    }, [virtualItems, count, fetchNextPage, hasNextPage, isFetchingNextPage]);

    return !isLoading ? <div ref={parentRef} className={style.chatList}>
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
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            transform: `translateY(${virtualRow.start}px)`,
                        }}
                    >
                        <ChatItem {...item} />
                    </div>
                );
            })}
        </div>
        {isBelow && <NavigateToTop scrollToBelow={scrollToBelow}/>}
    </div> : <ChatListLoading/>
};

export default ChatList;
