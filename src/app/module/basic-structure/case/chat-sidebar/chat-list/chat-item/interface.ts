import type {IMessageEntity} from "@/domain/message/interface/entity.ts";
import type {IUserEntity} from "@/domain/user/interface/entity.ts";

type IChatItemProps =
    Pick<IMessageEntity, 'id' | 'body' | 'createdAt' | "editedAt">
    & Pick<IUserEntity, 'login' | 'picture'>

export type {
    IChatItemProps
}