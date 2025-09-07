import { createContext, useState } from "react";
import { storage } from "../helpers/storage";

export const AvatarContext = createContext(null);

export const AvatarProvider = ({ children }) => {
    const savedAvatar = storage.get("avatar");
    const [selectedAvatar, setSelectedAvatar] = useState(savedAvatar || null);

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};
