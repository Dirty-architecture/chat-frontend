import type {ReactNode} from 'react';
import {ChatCenteredDotsIcon} from "@phosphor-icons/react";
import style from './index.module.scss'

const NotOpenChat = (): ReactNode => {
    return (
        <div className={style.noOpenChat}>
            <p className={style.text}>Выберите чат слевой стороны чтоб начать общение <ChatCenteredDotsIcon/></p>
        </div>
    );
};

export {NotOpenChat};
