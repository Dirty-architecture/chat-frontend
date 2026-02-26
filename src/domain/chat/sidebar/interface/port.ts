import type {ISearchChatListForm} from "./form.ts";

interface IBaseChatListPort {
    limit?: number
    cursor?: string
}

type ISearchChatListPort = ISearchChatListForm & IBaseChatListPort

type IGetAllChatListPort = IBaseChatListPort

export type {ISearchChatListPort, IGetAllChatListPort}