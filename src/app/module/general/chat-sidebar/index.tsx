import {LoadComponent} from "ui/lazy-loading";
import {lazy} from "react";

const ChatSidebar = LoadComponent(lazy(async () => import("./component.tsx")), <div/>)

export default ChatSidebar;