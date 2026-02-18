import type {IGetAllChatListDto} from "@/domain/chat/sidebar/interface/dto.ts";
import type {IGetAllChatListPort} from "@/domain/chat/sidebar/interface/port.ts";

class ChatSidebarDB {
    private chatList = this.makeRandomChatList(Math.floor(Math.random() * 1000) + 1);

    /** Список чатов (для UI) */
    public getChatList({cursor, limit}: IGetAllChatListPort): IGetAllChatListDto {
        const pageSize = Math.max(1, limit ?? 20);

        const startIndex = (() => {
            if (!cursor) return 0;
            const idx = this.chatList.findIndex((x) => x.id === cursor);
            return idx === -1 ? 0 : idx + 1;
        })();

        const items = this.chatList.slice(startIndex, startIndex + pageSize);

        const hasNext = startIndex + pageSize < this.chatList.length;
        const nextCursor = hasNext && items.length > 0 ? items[items.length - 1].id : null;

        return {
            items,
            hasNext,
            cursor: nextCursor,
        };
    }

    private makeRandomChatList(count: number) {
        const now = Date.now();

        const logins = [
            "alex", "maria", "dima", "olga", "nikita", "sveta",
            "ivan", "kate", "sergey", "anna", "pavel", "lena",
        ];

        const messages = [
            "Привет! Как дела?",
            "Глянь, я скинул(а) обновление.",
            "Ок, договорились.",
            "Сейчас буду.",
            "Можно созвониться через 10 минут?",
            "Я поправил(а) баг, проверь пожалуйста.",
            "Супер, спасибо!",
            "Давай завтра утром.",
            "Уточню и вернусь.",
            "Понял(а), принято.",
        ];

        const randomInt = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min + 1)) + min;

        const randomFrom = <T, >(arr: T[]) => arr[randomInt(0, arr.length - 1)];

        const makeId = () => {
            // достаточно для моков; в проде лучше crypto.randomUUID()
            const part = () => Math.random().toString(16).slice(2, 10);
            return `${part()}-${part()}-${part()}`;
        };

        const makeAvatar = (login: string) =>
            `https://api.dicebear.com/9.x/identicon/svg?seed=${encodeURIComponent(login)}`;

        return Array.from({length: count}, (_, i) => {
            const login = randomFrom(logins) + (Math.random() < 0.25 ? String(randomInt(2, 99)) : "");
            const minutesAgo = randomInt(1, 60 * 24 * 7); // до недели назад
            const lastSeenAt = new Date(now - minutesAgo * 60_000 - i * 5_000);

            return {
                id: makeId(),
                body: randomFrom(messages),
                login,
                picture: Math.random() < 0.15 ? null : makeAvatar(login),
                lastSeenAt,
            };
        });
    }
}

// singleton
const chatSidebarDB = new ChatSidebarDB();

export {chatSidebarDB};