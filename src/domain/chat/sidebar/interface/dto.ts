import type {IMessageEntity} from "@/domain/message/interface/entity.ts";
import type {IUserEntity} from "@/domain/user/interface/entity.ts";
import type {ICursor} from "@/domain/common/pagination/cursor-page.ts";

type IChatListItemDto = Partial<Pick<IMessageEntity, "body">> &
    Pick<IUserEntity, "login" | "picture" | 'id' | 'lastSeenAt'>;

type IGetAllChatListDto = ICursor<IChatListItemDto[]>;

export type {IChatListItemDto,IGetAllChatListDto}