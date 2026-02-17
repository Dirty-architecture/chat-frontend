import {type ErrorInfo, type ReactNode} from "react";

type IFallbackRender = (args: {
    error: unknown;
    resetErrorBoundary: () => void;
}) => ReactNode;

interface IErrorBoundaryProps {
    children: ReactNode;

    /**
     * Можно передать готовый ReactNode (например, <div>Упс</div>)
     * или функцию-рендер, если нужно показать детали ошибки / кнопку "Повторить".
     */
    fallback?: ReactNode | IFallbackRender;

    /**
     * Вызывается, когда boundary поймал ошибку.
     * Удобно для логирования.
     */
    onError?: (error: unknown, info: ErrorInfo) => void;

    /**
     * Если значение изменилось — boundary сбросит ошибку и попробует отрендериться заново.
     * Например: resetKey={location.pathname}
     */
    resetKey?: string | number;
}

interface IErrorBoundaryState {
    hasError: boolean;
    error: unknown;
}


export type {IErrorBoundaryProps, IErrorBoundaryState}