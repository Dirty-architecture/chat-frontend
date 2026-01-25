interface IUserEntity {
    id: string;
    login: string;
    password: string;
    picture?: string | null;
    createdAt: Date;
    updatedAt: Date;
    lastSeenAt?: Date | null;
}


export type {IUserEntity}
