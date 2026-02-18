import {LoadComponent} from "ui/lazy-loading";
import {lazy} from "react";

const ChatRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)

export default ChatRoute;