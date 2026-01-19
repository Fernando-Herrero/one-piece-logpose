import type { ReactNode } from "react";

export interface NotificacionsContextProps {
    children: ReactNode;
}

export type NotificationsContextType = {
    notis: string[];
    setNotis: React.Dispatch<React.SetStateAction<string[]>>;
    loading: boolean;
    error: string | null;
};

export type NotificationsCountType = {
    notisCount: number;
    setNotisCount: React.Dispatch<React.SetStateAction<number>>;
    decrementCount: () => void;
    fetchNotificationsCount: () => Promise<void>;
};

export type NotificationType = "like" | "bookmark" | "comment";

export type CreateNotificationData = {
    type: NotificationType;
    to: string;
    from: string;
    postId: string;
};

export type NotificationUser = {
    id?: string;
    _id?: string;
    username: string;
    firstName: string;
    lastName: string;
    displayName: string;
    avatar: string;
    verified: boolean;
};

export type NotificationPost = {
    id?: string;
    _id?: string;
    text: string;
    images: string[];
    hashtags: string[];
};

export type Notification = {
    id?: string;
    _id?: string;

    type: NotificationType;

    to: NotificationUser;
    from: NotificationUser;

    postId?: NotificationPost | null;
    commentId?: string | null;

    read: boolean;

    createdAt: string;
    updatedAt: string;

    __v?: number;
};

export type NotificationCount = {
    count: number;
};

export type AllNotificationsRead = {
    message: string;
    modifiedCount: number;
};

export type DeletedNotification = {
    id: string;
    to: string;
    from: string;
    type: NotificationType;
    postId: string;
    commentId: string | null;
    read: boolean;
    createdAt: string;
    updatedAt: string;
};

export type DeleteAllNotifications = {
    ok: boolean;
    message: string;
    deletedCount: number;
};
