import {type ReactNode} from 'react';
import s from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {CaretLeftIcon} from "@phosphor-icons/react";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import {Avatar} from "ui/avatar";

const ChatTopBar = (): ReactNode => {
    const navigate = useNavigate()

    const handleNavigateBack = () => {
        navigate(ROUTER_PATH.HOME)
    }
    return (
        <div className={s['chat__topbar']}>
            <IconButton onClick={handleNavigateBack} aria-label='navigate-to-back'
                        variant="ghost"><CaretLeftIcon/></IconButton>
            <div className={s['chat__topbar-right']}>test<Avatar fallback='Te'/></div>
        </div>
    );
};

export default ChatTopBar;
