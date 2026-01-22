import {createBrowserRouter} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import AuthorizationRoute from "@/app/module/user/case/authoriztion/route.tsx";
import RegistrationRoute from "@/app/module/user/case/registration/route.tsx";
import ChatRoute from "@/app/module/chat/route.tsx";
import HomeRoute from "@/app/module/home/route.tsx";

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
        path: ROUTER_PATH.CHAT,
        element: <ChatRoute/>,
    },
    {
        path: ROUTER_PATH.HOME,
        element: <HomeRoute/>,
    },
]);


export default router;
