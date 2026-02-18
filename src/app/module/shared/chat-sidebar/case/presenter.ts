import {useSearchChatSideBarRequest} from "./request.ts";
import {useDebounceValue} from "@siberiacancode/reactuse";

const TYPE_SPEED = 20
const SECONDS_IN_MINUTE = 60
const SECOND_IN_MS = 1000

// Скорость debounce при скорости печати в 20 слов
const SEARCH_DEBOUNCE_MS = SECOND_IN_MS - Math.floor(SECOND_IN_MS / (SECONDS_IN_MINUTE / TYPE_SPEED));


const CHAT_LIST_PAGE_LIMIT = 20;

const useSearchChatSideBarPresenter = (search?: string) => {
    const debouncedSearch = useDebounceValue(search, SEARCH_DEBOUNCE_MS);

    const props = useSearchChatSideBarRequest({
        search: debouncedSearch,
        limit: CHAT_LIST_PAGE_LIMIT,
    });
    return {debouncedSearch, ...props}
};

export {useSearchChatSideBarPresenter};