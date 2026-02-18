import { useEffect } from "react";
import { last, toNumber } from "es-toolkit/compat";
import type { VirtualItem } from "@tanstack/react-virtual";

const FETCH_NEXT_PAGE_THRESHOLD_FROM_END = 3;

type IFetchNextPageFn = () => void | Promise<unknown>;

interface IFetchNextPageParams<TVirtualItem extends { index: number } = VirtualItem> {
  virtualItems: readonly TVirtualItem[];
  count: number;
  fetchNextPage?: IFetchNextPageFn;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
};

const useFetchNextPage = <TVirtualItem extends { index: number } = VirtualItem>({
  virtualItems,
  count,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: IFetchNextPageParams<TVirtualItem>): void => {
  useEffect(() => {
    if (!fetchNextPage || !hasNextPage || isFetchingNextPage || !virtualItems.length) return;

    const lastVirtualItem = last(virtualItems);
    const isNearEnd =
      toNumber(lastVirtualItem?.index) >= count - FETCH_NEXT_PAGE_THRESHOLD_FROM_END;

    if (isNearEnd) fetchNextPage();
  }, [virtualItems, count, fetchNextPage, hasNextPage, isFetchingNextPage]);
};

export default useFetchNextPage;