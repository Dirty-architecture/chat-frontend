const ChatRole = {
    OWNER: "OWNER",
    ADMIN: "ADMIN",
    MEMBER: "MEMBER",
}
type EChatRoleType = typeof ChatRole[keyof typeof ChatRole];

export {ChatRole}
export type {EChatRoleType}
