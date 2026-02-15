import type {ReactNode} from 'react';
import {Outlet} from "react-router";
import s from './index.module.scss'
import dimStyle from 'ui/dim-wrapper/index.module.scss'
import {mediaQuery} from "@/app/utils/media-query.ts";
import {BREAKPOINTS} from "@/app/common/const/breakpoints.ts";
import ChatSidebar from "@/app/module/general/chat-sidebar";
import cn from "@/app/utils/cn.ts";
import ModalRoot from "@/app/common/store/modal/component.tsx";

const BasicWrapper = (): ReactNode => {
    const isTablet = mediaQuery(`(max-width: ${BREAKPOINTS.laptop}px)`);

    return (
        <>
            <div className={s['basic-wrapper']}>
                {isTablet ?
                    <article className={cn(s['basic-wrapper__tablet'], dimStyle.dimWrapper)}>
                        <Outlet/>
                    </article>
                    :
                    <>
                        <article className={cn(s['basic-wrapper__left'], dimStyle.dimWrapper)}>
                            <ChatSidebar className={s['chat-sidebar__desktop']}/>
                        </article>
                        <article className={cn(s['basic-wrapper__right'], dimStyle.dimWrapper)}>
                            <Outlet/>
                        </article>
                    </>
                }
            </div>
            <ModalRoot/>
        </>
    );
};

export {BasicWrapper};
