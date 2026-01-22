import type {ReactNode} from 'react';
import style from './index.module.scss'
import Input from "@/app/ui/input";
import Button from "@/app/ui/button";

const AuthorizationForm = (): ReactNode => {
    return (
        <form className={style.formWrapper}>
            <h2>Авторизация</h2>
            <Input type="text" title='email'/>
            <Input type="text" title='password'/>
            <Button>Войти</Button>
        </form>
    );
};

export default AuthorizationForm;
