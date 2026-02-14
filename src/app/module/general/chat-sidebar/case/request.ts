import {chatSidebarRepository} from "@/data/chat-sidebar/singleton.ts";
import {GetAllChatSideBarUseCase} from "@/domain/chat/sidebar/use-case/get-all.ts";
import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";
import {useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/const/query-key.ts";

const useCase = new GetAllChatSideBarUseCase(chatSidebarRepository)

const useGetAllChatSideBarRequest = () => {
    const callback = async (): Promise<IChatListItemDto[]> => {
        return useCase.execute()
    }
    return useQuery({queryFn: callback, queryKey: [QUERY_KEY.CHAT_LIST]})
}

export {useGetAllChatSideBarRequest}