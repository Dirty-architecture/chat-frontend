import type {ReactNode} from 'react';
import {Link} from "react-router";
import style from './index.module.scss'
import type {IAlternativeActionsProps} from "./interface.ts";


const AlternativeActions = ({
                                linkText, mainText,
                                to
                            }: IAlternativeActionsProps): ReactNode => {
    return (
        <p>
            {mainText} <Link className={style.link} to={to}>{linkText}</Link>
        </p>
    );
};

export default AlternativeActions;
