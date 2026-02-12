import type {ReactNode} from 'react';
import {Outlet} from "react-router";
import style from './index.module.scss'
import dimStyle from 'ui/dim-wrapper/index.module.scss'
import ChatSidebar from "@/app/module/basic-structure/case/chat-sidebar";

const BasicWrapper = (): ReactNode => {
    return (
        <div className={style.basicWrapper}>
            <article className={[style.leftSide, dimStyle.dimWrapper].join(' ')}>
                <ChatSidebar/>
            </article>
            <article className={[style.rightSide, dimStyle.dimWrapper].join(' ')}>
                <Outlet/>
            </article>
        </div>
    );
};

export {BasicWrapper};
