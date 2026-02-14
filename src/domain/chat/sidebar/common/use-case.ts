import type {IChatSidebarRepository} from "@/domain/chat/sidebar/interface/repository.ts";

class BaseChatSidebarUseCase {
    protected readonly _repository: IChatSidebarRepository

    constructor(UsersRepository: IChatSidebarRepository) {
        this._repository = UsersRepository
    }
}

export {BaseChatSidebarUseCase}