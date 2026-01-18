import type { ReactNode } from "react";

type Privacy = {
    showBookmarked: boolean;
    showComments: boolean;
    showLikes: boolean;
    showPosts: boolean;
};

type SerieProgress = {
    arc: number;
    episode: number;
    saga: number;
};

export interface User {
    id: string;
    verified: boolean;
    username: string;
    updatedAt: string;
    address: string;
    avatar: string;
    bio: string;
    coverImage: string;
    createdAt: string;
    displayName: string;
    email: string;
    experience: number;
    firstName: string;
    isActive: boolean;
    lastName: string;
    name: string;
    phoneNumber: string;
    role: "admin" | "user";
    privacy: Privacy;
    bookings: string[];
    followeers: string[];
    following: string[];
    orders: string[];
    serieProgress: SerieProgress;
}

export type AuthContextValue = {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAdmin: boolean | undefined;
    isVerified: boolean | undefined;
    userPrivacy: Privacy | undefined;
    clearError: () => void;
};

export interface AuthContextProps {
    children: ReactNode;
}
