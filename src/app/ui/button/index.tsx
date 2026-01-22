import type {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import style from './index.module.scss'

const Button = ({
                    className,
                    ...props
                }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): ReactNode => {
    return (
        <button className={[style.button, className].join(' ')} {...props}/>
    );
};

export default Button;
