export interface Message {
    id: string;
    userId: string;
    message: string;
    timestamp: Date;
}

/**
 * ユーザー
 */
export interface User {
    id: string;
    name: string;
    socketId: string;
}

/**
 * チャットルーム
 */
export interface Room {
    id: string;
    name: string;
    users: User[];
    last: Date;
}
