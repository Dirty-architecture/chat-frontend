import type {EChatTypeType} from "@/domain/common/enum/chat-type.ts";

interface IChatEntity {
    id: string;
    type: EChatTypeType;
    title?: string | null;
    ownerId?: string | null;
    createdAt: Date;
}

export type {IChatEntity}
