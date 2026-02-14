import {type ReactNode, useMemo, useRef} from 'react';
import {useVirtualizer} from '@tanstack/react-virtual';
import ChatItem from './chat-item';
import style from './index.module.scss';
import type {IChatListProps} from './interface.ts';

const Y_PADDING = 8;

const ROW_ESTIMATE_PX = 48 + Y_PADDING;

const ChatList = ({data, length}: IChatListProps): ReactNode => {
    const parentRef = useRef<HTMLDivElement>(null);

    const count = useMemo(() => data?.length ?? length ?? 0, [data?.length, length]);

    const rowVirtualizer = useVirtualizer({
        count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ROW_ESTIMATE_PX,
        overscan: 6,
    });

    const virtualItems = rowVirtualizer.getVirtualItems();

    return (
        <div ref={parentRef} className={style.chatList}>
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
        </div>
    );
};

export default ChatList;
