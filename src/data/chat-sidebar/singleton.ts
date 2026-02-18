import {ChatSidebarRepository} from "./repository.ts";
import {AXIOS_INTERCEPTOR} from "@/data/common/interceptor.ts";

const chatSidebarRepository = new ChatSidebarRepository(AXIOS_INTERCEPTOR)


export {
    chatSidebarRepository
}