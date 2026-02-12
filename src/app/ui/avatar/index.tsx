import type {ImgHTMLAttributes, ReactNode} from 'react';
import style from './index.module.scss';

export interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    size?: number;
    fallback?: string;
}

const Avatar = ({
                    className,
                    size = 40,
                    src,
                    alt = 'avatar',
                    fallback,
                    ...props
                }: IAvatarProps): ReactNode => {
    return (
        <div
            className={[style.avatarWrapper, className].join(' ')}
            style={{width: size, height: size}}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className={style.avatar}
                    {...props}
                />
            ) : (
                <div className={style.fallback}>
                    {fallback || alt?.charAt(0).toUpperCase()}
                </div>
            )}
        </div>
    );
};

export {Avatar}
