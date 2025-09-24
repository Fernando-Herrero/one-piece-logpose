import { AvatarContext } from "@/context/AvatarContext";
import { characters } from "@/helpers/avatarImages";
import { localStorage } from "@/helpers/storage";
import { useContext } from "react";

export const useAvatar = () => {
    const { selectedAvatar, setSelectedAvatar } = useContext(AvatarContext);

    const handleAvatar = async (avatarName) => {
        const character = characters.find((char) => char.name === avatarName);

        if (character) {
            const avatarUrl = character.happy;

            setSelectedAvatar(avatarUrl);
            localStorage.save("avatarSelected", avatarUrl);
            console.log(avatarUrl);
        }
    };

    return { handleAvatar, selectedAvatar };
};
