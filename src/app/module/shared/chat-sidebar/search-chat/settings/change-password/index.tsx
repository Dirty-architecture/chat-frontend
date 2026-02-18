import {type ReactNode} from 'react';
import Input from "ui/input";
import s from './index.module.scss'

const ChangePassword = (): ReactNode => {
    return (
        <div className={s['changePassword-settings']}>
            <Input type="password" title='Пароль'/>
            <Input type="password" title='Повтор пароля'/>
            <Input type="password" title='Новый пароль'/>
        </div>
    );
};

export default ChangePassword;
