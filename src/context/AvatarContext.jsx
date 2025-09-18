import { storage } from "@/helpers/storage";
import { createContext, useState } from "react";

export const AvatarContext = createContext(null);

export const AvatarProvider = ({ children }) => {
    const savedAvatar = storage.get("avatar");
    const [selectedAvatar, setSelectedAvatar] = useState(savedAvatar || null);
    console.log(selectedAvatar);

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};
