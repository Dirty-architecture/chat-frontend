interface IUseCase<TPort, TResponse> {
    execute: (port: TPort) => Promise<TResponse>
}

export type {IUseCase}