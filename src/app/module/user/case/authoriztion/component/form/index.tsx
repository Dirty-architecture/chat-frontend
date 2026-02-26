import type {ReactNode} from 'react';
import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import {formStyle} from "@/app/module/user/general/form";
import {useForm} from "react-hook-form";
import {AXIOS_INTERCEPTOR} from "@/data/common/interceptor.ts";

const AuthorizationForm = (): ReactNode => {

    const form = useForm()

    const onSubmit = form.handleSubmit(async (data: unknown) => {
        await AXIOS_INTERCEPTOR.post('/auth/login', data)
    })

    return (
        <form onSubmit={onSubmit} className={formStyle.formWrapper}>
            <h2>Авторизация</h2>
            <Input type="text" title='Почта' {...form.register('login')}/>
            <Input type="text" title='Пароль' {...form.register('password')}/>
            <Button type='submit'>Войти</Button>
        </form>
    );
};

export default AuthorizationForm;
