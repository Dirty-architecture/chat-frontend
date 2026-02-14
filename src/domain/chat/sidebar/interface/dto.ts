import type {IMessageEntity} from "@/domain/message/interface/entity.ts";
import type {IUserEntity} from "@/domain/user/interface/entity.ts";

type IChatListItemDto = Pick<IMessageEntity, "id" | "body" | "createdAt" | "editedAt"> &
    Pick<IUserEntity, "login" | "picture">;

export type {IChatListItemDto}