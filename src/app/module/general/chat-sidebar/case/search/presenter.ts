import {useSearchChatSideBarRequest} from "./request.ts";
import {useDebounceValue} from "@siberiacancode/reactuse";

const useSearchChatSideBarPresenter = (search?: string) => {
    const debouncedSearch = useDebounceValue(search, 500);

    const props = useSearchChatSideBarRequest({
        search: debouncedSearch,
        limit: 20, // опционально, если нужно
    });

    return props;
};

export {useSearchChatSideBarPresenter};