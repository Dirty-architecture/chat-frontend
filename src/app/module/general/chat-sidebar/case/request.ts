import {chatSidebarRepository} from "@/data/chat-sidebar/singleton.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import {QUERY_KEY} from "@/app/common/const/query-key.ts";
import {useCheckAsyncAuth} from "@/app/utils/check-async-auth.ts";
import {GetGetAllSideBarUseCase} from "@/domain/chat/sidebar/use-case/get-all.ts";
import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import {useInfiniteQuery} from "@tanstack/react-query";

const useCase = new GetGetAllSideBarUseCase(chatSidebarRepository)

const useSearchChatSideBarRequest = (basePort: ISearchChatListPort) => {
    const checkAsyncAuth = useCheckAsyncAuth()

    return useInfiniteQuery({
        queryKey: [
            QUERY_KEY.CHAT_SEARCH,
            {
                search: basePort.search ?? "",
                limit: basePort.limit ?? undefined,
            },
        ],
        // enabled: Boolean(basePort.search), // чтобы не кидать ошибку, пока пользователь ничего не ввёл
        initialPageParam: undefined as string | undefined,
        queryFn: ({pageParam}) => {
            return checkAsyncAuth<IGetAllChatListDto>(() => useCase.execute({
                ...basePort,
                cursor: pageParam,
            }));
        },
        getNextPageParam: (lastPage) => {
            console.log('asds')
            return lastPage.hasNext ? lastPage?.cursor : undefined;
        },

    });
}

export {useSearchChatSideBarRequest}