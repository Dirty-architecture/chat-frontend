import {useGetAllChatSideBarRequest} from "@/app/module/general/chat-sidebar/case/get-all/request.ts";

const useGetAllChatSideBarPresenter = () => {
    const props = useGetAllChatSideBarRequest()

    return props
};


export {
    useGetAllChatSideBarPresenter
}