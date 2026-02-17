import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

interface IChatListProps {
    data?: IChatListItemDto[]
    isLoading?: boolean

    hasNextPage?: boolean
    isFetchingNextPage?: boolean
    fetchNextPage?: () => void
}

export type {
    IChatListProps
}