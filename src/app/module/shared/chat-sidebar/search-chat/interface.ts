import type {ISearchChatListPort} from "@/domain/chat/sidebar/interface/port.ts";
import type {UseFormReturn} from "react-hook-form";

interface ISearchChatProps {
    form: UseFormReturn<ISearchChatListPort, unknown, ISearchChatListPort>
}

export type {ISearchChatProps}