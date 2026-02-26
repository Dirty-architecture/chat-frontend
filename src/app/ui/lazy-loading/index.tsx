import {type FC, memo, type NamedExoticComponent, type ReactNode, Suspense} from "react";

const LoadComponent = <Props extends object, >(Component: FC<Props>, fallback: ReactNode): NamedExoticComponent<Props> => memo((props) => (
    <Suspense fallback={fallback}>
        <Component {...props} />
    </Suspense>
))

export {LoadComponent};
