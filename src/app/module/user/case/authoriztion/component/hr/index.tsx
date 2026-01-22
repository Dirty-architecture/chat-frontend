import type {ReactNode} from 'react';
import style from './index.module.scss'

const Hr = (): ReactNode => {
    return (
        <hr className={style.hr}/>
    );
};

export default Hr;
