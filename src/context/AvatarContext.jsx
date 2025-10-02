import { AuthContext } from "@/context/AuthContext";
import { local } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";

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

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};
