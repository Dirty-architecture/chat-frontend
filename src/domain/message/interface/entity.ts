interface IFriendEntity {
    id: bigint;
    chatId: string;
    senderId: string;
    body: string;
    createdAt: Date;
    editedAt?: Date | null;
    deletedAt?: Date | null;
}

export type {IFriendEntity}
