import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

interface IChatSidebarRepository {
    getChats: () => Promise<IChatListItemDto[]>
}

export type {IChatSidebarRepository}