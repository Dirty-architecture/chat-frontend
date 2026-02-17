import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

interface IChatItemProps extends IChatListItemDto {
    transformY: number
}

export type {
    IChatItemProps
}