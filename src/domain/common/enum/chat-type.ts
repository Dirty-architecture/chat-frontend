const ChatType = {
    PRIVATE: "PRIVATE",
    GROUP: "GROUP",
} as const;
type EChatTypeType = typeof ChatType[keyof typeof ChatType];

export {ChatType}
export type {EChatTypeType}
