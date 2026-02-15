import {type ReactNode} from 'react';
import Input from "ui/input";
import style from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {ListIcon} from "@phosphor-icons/react";
import {useModalStore} from "@/app/common/store/modal";
import SettingsModal from "@/app/module/general/modal/settings";
import type {ISearchChatProps} from "./interface.ts";

const SearchChat = ({form}: ISearchChatProps): ReactNode => {

    const show = useModalStore((s) => s.show);

    const handleOpenSettings = () => {
        show({
            title: "Настройки",
            content: <SettingsModal/>
        })
    }
    return (
        <div className={style['search-wrapper']}>
            <IconButton onClick={handleOpenSettings}><ListIcon/></IconButton>
            <Input {...form.register('search')} labelClassName={style['search-label']}/>
        </div>
    );
};

export default SearchChat;