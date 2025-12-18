import { AuthContext } from "@/context/AuthContext";
import { local } from "@/helpers/storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AvatarContext = createContext(null);

export const AvatarProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const savedAvatar = local.get("avatarSelected");
    const [selectedAvatar, setSelectedAvatar] = useState((user?.avatar ?? savedAvatar) || null);

    useEffect(() => {
        if (user?.avatar && !savedAvatar) {
            setSelectedAvatar(user.avatar);
        }
    }, [user?.avatar, savedAvatar]);

    const contextValue = useMemo(() => ({ selectedAvatar, setSelectedAvatar }), [selectedAvatar]);

    return <AvatarContext.Provider value={contextValue}>{children}</AvatarContext.Provider>;
};
