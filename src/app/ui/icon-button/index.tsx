import type {ButtonHTMLAttributes, ReactNode} from 'react';
import s from './index.module.scss';

export type IconButtonVariant = 'ghost' | 'primary';

export interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: number; // px
    variant?: IconButtonVariant;
    round?: boolean;
}

/**
 * Icon-only button.
 * Важно: передавайте `aria-label`, чтобы кнопка была доступной для скринридеров.
 */
const IconButton = ({
                        className,
                        size = 40,
                        variant = 'ghost',
                        round = false,
                        children,
                        disabled,
                        type = 'button',
                        ...props
                    }: IIconButtonProps): ReactNode => {
    const classes = [
        s['icon-button'],
        variant === 'primary' ? s['icon-button--primary'] : s['icon-button--ghost'],
        round ? s['icon-button--round'] : '',
        disabled ? s['icon-button--disabled'] : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type={type}
            disabled={disabled}
            className={classes}
            style={{['--icon-button-size' as never]: `${size}px`}}
            {...props}
        >
            <span className={s['icon-button__icon']}>{children}</span>
        </button>
    );
};

export {IconButton};