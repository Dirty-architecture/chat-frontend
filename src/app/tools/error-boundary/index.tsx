import {Component, type ErrorInfo} from "react";
import s from './index.module.scss'
import {IconButton} from "ui/icon-button";
import {ArrowClockwiseIcon} from "@phosphor-icons/react";
import type {IErrorBoundaryProps, IErrorBoundaryState} from "./interface.ts";

class ErrorBoundary extends Component<
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

    componentDidCatch(error: unknown, info: ErrorInfo) {
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