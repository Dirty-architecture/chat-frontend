import type {FriendStatusType} from "@/domain/common/enum/friend-status.ts";

interface IFriendEntity {
    id: string;
    requesterId: string;
    addresseeId: string;
    status: FriendStatusType;
    createdAt: Date;
}


export type {IFriendEntity};
