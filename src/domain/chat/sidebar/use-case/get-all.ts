import type {IGetAllChatSideBarUseCase} from "@/domain/chat/sidebar/interface/use-case.ts";
import {BaseChatSidebarUseCase} from "@/domain/chat/sidebar/common/use-case.ts";
import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {IGetAllChatListPort} from "@/domain/chat/sidebar/interface/port.ts";

class GetAllChatSideBarUseCase extends BaseChatSidebarUseCase implements IGetAllChatSideBarUseCase {
    public async execute(port: IGetAllChatListPort): Promise<IGetAllChatListDto> {
        return this._repository.getChats(port)
    }
}

export {GetAllChatSideBarUseCase}
