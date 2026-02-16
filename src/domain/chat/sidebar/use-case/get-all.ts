import type {ISearchChatSideBarUseCase} from "@/domain/chat/sidebar/interface/use-case.ts";
import {BaseChatSidebarUseCase} from "@/domain/chat/sidebar/common/use-case.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";

class GetGetAllSideBarUseCase extends BaseChatSidebarUseCase implements ISearchChatSideBarUseCase {
    public async execute(port: ISearchChatListPort): Promise<IGetAllChatListDto> {
        if (port.search)
            return this._repository.search(port)
        return this._repository.getChats(port)
    }
}

export {GetGetAllSideBarUseCase}
