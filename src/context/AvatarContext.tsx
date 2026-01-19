import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { local } from "../helpers/storage";
import type { AvatarContextProps, AvatarContextType } from "../types/avatar.types";
import { AuthContext } from "./AuthContext";

export const AvatarContext = createContext<AvatarContextType | null>(null);

export const AvatarProvider = ({ children }: AvatarContextProps) => {
    const userAuth = useContext(AuthContext);
    if (!userAuth) return null;
    const { user } = userAuth;

    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(() => {
        return (user?.avatar ?? local.get<string>("avatarSelected")) || null;
    });

    useEffect(() => {
        if (user?.avatar) {
            setSelectedAvatar(user.avatar);
        }
    }, [user?.avatar]);

    const contextValue = useMemo(() => ({ selectedAvatar, setSelectedAvatar }), [selectedAvatar]);

    return <AvatarContext.Provider value={contextValue}>{children}</AvatarContext.Provider>;
};
