import type {IUseCase} from "@/domain/common/http/use-case.ts";
import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

type IGetAllChatSideBarUseCase = IUseCase<undefined, IChatListItemDto[]>;

export type {IGetAllChatSideBarUseCase}