const FriendStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    BLOCKED: "BLOCKED",
}
type FriendStatusType = typeof FriendStatus[keyof typeof FriendStatus];

export {FriendStatus}
export type {FriendStatusType}
