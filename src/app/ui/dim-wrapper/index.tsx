import type {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from "./index.module.scss"

const DimWrapper = ({
                        className,
                        ...props
                    }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): ReactNode => {
    return (
        <div className={[styles.dimWrapper, className].join(' ')} {...props}/>
    );
};

export default DimWrapper;
