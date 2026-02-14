import type {IUserEntity} from "@/domain/user/interface/entity.ts";

type IUser = Omit<IUserEntity, 'password'> | null

interface IUserState {
    user: IUser;
    set: (user: IUser) => void
}


export type {IUserState}