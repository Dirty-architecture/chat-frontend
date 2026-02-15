import type {IUseCase} from "@/domain/common/http/use-case.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {IGetAllChatListPort, ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";

type IGetAllChatSideBarUseCase = IUseCase<IGetAllChatListPort, IGetAllChatListDto>;
type ISearchChatSideBarUseCase = IUseCase<ISearchChatListPort, IGetAllChatListDto>;

export type {IGetAllChatSideBarUseCase, ISearchChatSideBarUseCase}