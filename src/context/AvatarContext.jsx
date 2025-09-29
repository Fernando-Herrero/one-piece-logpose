import { AuthContext } from "@/context/AuthContext";
import { local } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";

export const AvatarContext = createContext(null);

export const AvatarProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const savedAvatar = local.get("avatarSelected");

    // 🔍 Debug inicial
    console.log("=== AvatarProvider Debug ===");
    console.log("👤 User from AuthContext:", user);
    console.log("👤 User avatar:", user?.avatar);
    console.log("💾 Saved avatar from localStorage:", savedAvatar);
    console.log("🎯 Initial selectedAvatar will be:", (user?.avatar ?? savedAvatar) || null);

    const [selectedAvatar, setSelectedAvatar] = useState((user?.avatar ?? savedAvatar) || null);

    useEffect(() => {
        console.log("🔄 useEffect triggered:");
        console.log("  - user?.avatar:", user?.avatar);
        console.log("  - savedAvatar:", savedAvatar);
        console.log("  - Condition (user?.avatar && !savedAvatar):", user?.avatar && !savedAvatar);

        if (user?.avatar && !savedAvatar) {
            console.log("✅ Setting selectedAvatar to user.avatar:", user.avatar);
            setSelectedAvatar(user.avatar);
        } else {
            console.log("❌ Not updating selectedAvatar because:");
            if (!user?.avatar) console.log("  - No user.avatar");
            if (savedAvatar) console.log("  - savedAvatar exists:", savedAvatar);
        }
    }, [user?.avatar, savedAvatar]);

    console.log("🏁 Final selectedAvatar state:", selectedAvatar);
    console.log("================================");

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};
