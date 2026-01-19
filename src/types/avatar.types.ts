import { type ReactNode } from "react";

export type AvatarContextType = {
    selectedAvatar: string | null;
};

export interface AvatarContextProps {
    children: ReactNode;
}
