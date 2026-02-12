import {type ReactNode} from 'react';
import Input from "ui/input";
import style from './index.module.scss'

const SearchChat = (): ReactNode => {
    return (
        <div className={style.search}>
            <Input/>
        </div>
    );
};

export default SearchChat;