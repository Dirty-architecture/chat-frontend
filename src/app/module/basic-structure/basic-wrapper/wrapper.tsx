import type {ReactNode} from 'react';
import {Outlet} from "react-router";
import style from './index.module.scss'
import ChatList from "@/app/module/basic-structure/case/left-side/chat-list";
import dimStyle from 'ui/dim-wrapper/index.module.scss'

const BasicWrapper = (): ReactNode => {
    return (
        <div className={style.basicWrapper}>
            <article className={[style.leftSide, dimStyle.dimWrapper].join(' ')}>
                <ChatList/>
            </article>
            <article className={[style.rightSide, dimStyle.dimWrapper].join(' ')}>
                <Outlet/>
            </article>
        </div>
    );
};

export {BasicWrapper};
