import { AvatarContext } from "@/context/AvatarContext";
import { useContext } from "react";

export const useAvatar = () => {
    const { selectedAvatar, setSelectedAvatar } = useContext(AvatarContext);

    const handleAvatar = async (avatarName) => {
        setSelectedAvatar(avatarName);
        localStorage.save("avatarSelected", avatarName);
    };

    return { handleAvatar, selectedAvatar };
};
