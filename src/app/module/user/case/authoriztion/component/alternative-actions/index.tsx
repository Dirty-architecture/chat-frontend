import type {ReactNode} from 'react';
import {Link} from "react-router";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import style from './index.module.scss'

const AlternativeActions = (): ReactNode => {
    return (
        <p>
            Еще не зарегистрированы? <Link className={style.link} to={ROUTER_PATH.REGISTER}>Зарегистрироваться</Link>
        </p>
    );
};

export default AlternativeActions;
