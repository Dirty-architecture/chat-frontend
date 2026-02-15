import {chatSidebarRepository} from "@/data/chat-sidebar/singleton.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import {QUERY_KEY} from "@/app/common/const/query-key.ts";
import {useCheckAsyncAuth} from "@/app/utils/check-async-auth.ts";
import {GetSearchSideBarUseCase} from "@/domain/chat/sidebar/use-case/search.ts";
import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import {useInfiniteQuery} from "@tanstack/react-query";

const useCase = new GetSearchSideBarUseCase(chatSidebarRepository)

const useSearchChatSideBarRequest = (basePort: ISearchChatListPort) => {
    const checkAsyncAuth = useCheckAsyncAuth()
    const callback = async (): Promise<IGetAllChatListDto> => {
        if (!basePort.search) throw new Error('search is required')

        return checkAsyncAuth<IGetAllChatListDto>(() => useCase.execute(port))
    }
    return useInfiniteQuery({
        queryKey: [
            QUERY_KEY.CHAT_SEARCH,
            {
                search: basePort.search ?? "",
                limit: basePort.limit ?? undefined,
            },
        ],
        enabled: Boolean(basePort.search), // чтобы не кидать ошибку, пока пользователь ничего не ввёл
        initialPageParam: undefined as string | undefined,
        queryFn: ({pageParam}) => {
            const port: ISearchChatListPort = {
                ...basePort,
                cursor: pageParam, // курсор конкретной страницы
            };

            return checkAsyncAuth<IGetAllChatListDto>(() => useCase.execute(port));
        },
        getNextPageParam: (lastPage) => {
            // твой ICursor: { items, hasNext, cursor }
            return lastPage.hasNext ? (lastPage.cursor ?? undefined) : undefined;
        },
    });
}

export {useSearchChatSideBarRequest}