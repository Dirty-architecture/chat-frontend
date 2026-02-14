import {useGetAllChatSideBarRequest} from "@/app/module/general/chat-sidebar/case/request.ts";
import {useForm} from "react-hook-form";

const useGetAllChatSideBarPresenter = () => {
    const form = useForm()

    const props = useGetAllChatSideBarRequest()


    return {form, ...props}
};


export {
    useGetAllChatSideBarPresenter
}