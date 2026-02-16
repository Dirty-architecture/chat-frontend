import React from "react";
import s from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {ArrowClockwiseIcon} from "@phosphor-icons/react";

type IFallbackRender = (args: {
    error: unknown;
    resetErrorBoundary: () => void;
}) => React.ReactNode;

interface IErrorBoundaryProps {
    children: React.ReactNode;

    /**
     * Можно передать готовый ReactNode (например, <div>Упс</div>)
     * или функцию-рендер, если нужно показать детали ошибки / кнопку "Повторить".
     */
    fallback?: React.ReactNode | IFallbackRender;

    /**
     * Вызывается, когда boundary поймал ошибку.
     * Удобно для логирования.
     */
    onError?: (error: unknown, info: React.ErrorInfo) => void;

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

class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    state: IErrorBoundaryState = {
        hasError: false,
        error: null,
    };

    static getDerivedStateFromError(error: unknown): IErrorBoundaryState {
        return {hasError: true, error};
    }

    componentDidCatch(error: unknown, info: React.ErrorInfo) {
        this.props.onError?.(error, info);
    }

    componentDidUpdate(prevProps: IErrorBoundaryProps) {
        if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
            this.resetErrorBoundary();
        }
    }

    private resetErrorBoundary = () => {

        window.location.reload()
        // this.setState({hasError: false, error: null});
    };

    render() {
        const {hasError, error} = this.state;

        if (!hasError) return this.props.children;

        const {fallback} = this.props;

        if (typeof fallback === "function") {
            return fallback({error, resetErrorBoundary: this.resetErrorBoundary});
        }

        if (fallback != null) {
            return fallback;
        }

        return (
            <div className={s['root']}>
                <p className={s['text']} style={{fontWeight: 600, marginBottom: 8}}>
                    Что-то пошло не так
                    <IconButton onClick={this.resetErrorBoundary}><ArrowClockwiseIcon/></IconButton>
                </p>
            </div>
        );
    }
}

export default ErrorBoundary;