import {LoadComponent} from "ui/lazy-loading";
import {lazy} from "react";
import ChatListLoading from "@/app/module/general/loading";
import s from './index.module.scss'

const ChatSidebar = LoadComponent(lazy(async () => import("./component.tsx")),
    <ChatListLoading className={s['sidebar-loading__margin']}/>)

export default ChatSidebar;