import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

interface IChatListProps {
    data?: IChatListItemDto[]
    length: number
    isLoading?: boolean
}

export type {
    IChatListProps
}