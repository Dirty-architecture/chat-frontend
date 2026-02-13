import {type ReactNode} from 'react';
import {useMediaQuery} from "@/app/utils/useMediaQuery.ts";
import {BREAKPOINTS} from "@/app/common/const/breakpoints.ts";
import ChatSidebar from "@/app/module/general/chat-sidebar";
import {NotOpenChat} from "@/app/module/basic-structure/case/chat-content";
import s from './index.module.scss'

const MainRoute = (): ReactNode => {

    const isLaptop = useMediaQuery(`(max-width: ${BREAKPOINTS.laptop}px)`);

    return (
        <>
            {isLaptop ? <ChatSidebar className={s['chat-sidebar__desktop']}/> : <NotOpenChat/>}
        </>
    );
};

export default MainRoute;
