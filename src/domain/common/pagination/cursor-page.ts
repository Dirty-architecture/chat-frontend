interface ICursor<T> {
    items: T
    hasNext: boolean
    cursor: string | null
}

export type {ICursor}