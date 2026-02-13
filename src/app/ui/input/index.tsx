import type {ReactNode} from 'react';
import style from './index.module.scss'
import type {IInputProps} from "./interface.ts";


const Input = ({
                   className,
                   title,
                   labelClassName,
                   ...props
               }: IInputProps): ReactNode => {
    return (
        <label className={[style.inputWrapper, labelClassName].join(' ')}>
            {title}
            <input className={[style.input, className].join(' ')} {...props}/>
        </label>
    );
};

export default Input;
