import {createBrowserRouter} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import {AuthorizationRoute} from "@/app/module/user/case/authoriztion";
import RegistrationRoute from "@/app/module/user/case/registration/route.tsx";
import ChatRoute from "@/app/module/chat/route.tsx";
import {BasicWrapper} from "@/app/module/basic-structure/basic-wrapper";
import {NotOpenChat} from "@/app/module/basic-structure/case/chat-content";

const router = createBrowserRouter([
    {
        path: ROUTER_PATH.AUTHORIZATION,
        element: <AuthorizationRoute/>,
    },
    {
        path: ROUTER_PATH.REGISTER,
        element: <RegistrationRoute/>,
    },
    {
        element: <BasicWrapper/>,
        children: [
            {
                path: ROUTER_PATH.HOME,
                element: <NotOpenChat/>
            },
            {
                path: ROUTER_PATH.CHAT,
                element: <ChatRoute/>,
            },
        ]
    },
]);


export default router;
