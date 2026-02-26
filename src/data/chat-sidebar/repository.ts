import type {IChatSidebarRepository} from "@/domain/chat/sidebar/interface/repository.ts";
import {chatSidebarDB} from "@/data/chat-sidebar/db.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {IGetAllChatListPort, ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import type {AxiosInstance} from "axios";

class ChatSidebarRepository implements IChatSidebarRepository {
    private interceptor: AxiosInstance

    constructor(interceptor: AxiosInstance) {
        this.interceptor = interceptor
    }

    async search(port: ISearchChatListPort): Promise<IGetAllChatListDto> {
        return this.interceptor.post('/users/search', port).then(res => res.data)
    }

    getChats(port: IGetAllChatListPort): Promise<IGetAllChatListDto> {
        return new Promise(resolve => resolve(chatSidebarDB.getChatList(port)))
    }
}

export {ChatSidebarRepository}