import type {ReactNode} from 'react';
import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import {formStyle} from "@/app/module/user/general/form";

const RegistrationForm = (): ReactNode => {
    return (
        <form className={formStyle.formWrapper}>
            <h2>Регистрация</h2>
            <Input type="text" title='Почта'/>
            <Input type="text" title='Пароль'/>
            <Input type="text" title='Повтор пароля'/>
            <Button type='submit'>Зарегистрироваться</Button>
        </form>
    );
};

export default RegistrationForm;

