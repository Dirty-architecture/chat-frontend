import type {IGetAllChatSideBarUseCase} from "@/domain/chat/sidebar/interface/use-case.ts";
import {BaseChatSidebarUseCase} from "@/domain/chat/sidebar/common/use-case.ts";
import type {IChatListItemDto} from "@/domain/chat/sidebar/interface/dto.ts";

class GetAllChatSideBarUseCase extends BaseChatSidebarUseCase implements IGetAllChatSideBarUseCase {
    public async execute(): Promise<IChatListItemDto[]> {
        return this._repository.getChats()
    }
}

export {GetAllChatSideBarUseCase}
