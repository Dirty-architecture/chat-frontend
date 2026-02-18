import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {IGetAllChatListPort, ISearchChatListPort} from "./port.ts";

interface IChatSidebarRepository {
    search: (props: ISearchChatListPort) => Promise<IGetAllChatListDto>
    getChats: (port: IGetAllChatListPort) => Promise<IGetAllChatListDto>
}

export type {IChatSidebarRepository}