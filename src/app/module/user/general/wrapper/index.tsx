import type {PropsWithChildren, ReactNode} from 'react';
import DimWrapper from "@/app/ui/dim-wrapper";
import style from './index.module.scss'


const UnauthorizedWrapper = ({children}: PropsWithChildren): ReactNode => {
    return (
        <div className={style.containerWrapper}>
            <DimWrapper className={style.dimWrapper}>
                {children}

            </DimWrapper>
        </div>
    );
};

export default UnauthorizedWrapper;
