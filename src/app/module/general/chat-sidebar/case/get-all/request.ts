import {chatSidebarRepository} from "@/data/chat-sidebar/singleton.ts";
import {GetAllChatSideBarUseCase} from "@/domain/chat/sidebar/use-case/get-all.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import {useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/const/query-key.ts";
import {useCheckAsyncAuth} from "@/app/utils/check-async-auth.ts";

const useCase = new GetAllChatSideBarUseCase(chatSidebarRepository)

const useGetAllChatSideBarRequest = () => {
    const checkAsyncAuth = useCheckAsyncAuth()
    const callback = async (): Promise<IGetAllChatListDto> => {

        return checkAsyncAuth<IGetAllChatListDto>(() => useCase.execute({}))

    }
    return useQuery({queryFn: callback, queryKey: [QUERY_KEY.CHAT_LIST]})
}

export {useGetAllChatSideBarRequest}