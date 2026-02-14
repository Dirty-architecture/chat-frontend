import type {IChatSidebarRepository} from "@/domain/chat/sidebar/interface/repository.ts";
import {chatSidebarDB} from "@/data/chat-sidebar/db.ts";
import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

class ChatSidebarRepository implements IChatSidebarRepository {
    getChats(): Promise<IChatListItemDto[]> {
        return new Promise(resolve => resolve(chatSidebarDB.getChatList()))
    }
}

export {ChatSidebarRepository}