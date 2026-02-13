import {type ReactNode} from 'react';
import Input from "ui/input";
import style from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {ListIcon} from "@phosphor-icons/react";

const SearchChat = (): ReactNode => {
    return (
        <div className={style['search-wrapper']}>
            <IconButton><ListIcon/></IconButton>
            <Input labelClassName={style['search-label']}/>
        </div>
    );
};

export default SearchChat;