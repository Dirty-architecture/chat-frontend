interface IMessageEntities {
    id: string
    text: string
    user: 'me' | 'other'
}

type IMessages = Array<IMessageEntities>


export type {IMessageEntities, IMessages}