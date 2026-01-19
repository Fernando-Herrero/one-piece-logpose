import { type ReactNode } from "react";

export type AvatarContextType = {
    selectedAvatar: string | null;
    setSelectedAvatar: React.Dispatch<React.SetStateAction<string | null>>;
};

export interface AvatarContextProps {
    children: ReactNode;
}

export type Character = {
    name: string;
    serious: string;
    happy: string;
};
