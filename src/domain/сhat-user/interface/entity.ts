import type {EChatRoleType} from "@/domain/common/enum/chat-role.ts";

interface IChatUserEntity {
    chatId: string;
    userId: string;
    role: EChatRoleType;
    joinedAt: Date;
}

export type {IChatUserEntity}
