import {createBrowserRouter} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import {AuthorizationRoute} from "@/app/module/user/case/authoriztion";
import RegistrationRoute from "@/app/module/user/case/registration/route.tsx";
import ChatRoute from "@/app/module/chat/route.tsx";
import {BasicWrapper} from "@/app/module/basic-structure/basic-wrapper";
import MainRoute from "@/app/module/main/route.tsx";

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
                element: <MainRoute/>
            },
            {
                path: ROUTER_PATH.CHAT,
                element: <ChatRoute/>,
            },
        ]
    },
]);


export default router;
