import {createBrowserRouter} from "react-router";
import {ROUTER_PATH} from "@/app/common/const";
import {AuthorizationRoute} from "@/app/module/user/case/authoriztion";
import RegistrationRoute from "@/app/module/user/case/registration";
import ChatRoute from "@/app/module/chat";
import {BasicWrapper} from "@/app/module/basic-structure/basic-wrapper";
import MainRoute from "@/app/module/main";

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
