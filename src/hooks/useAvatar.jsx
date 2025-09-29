import { AvatarContext } from "@/context/AvatarContext";
import { characters } from "@/helpers/avatarImages";
import { local } from "@/helpers/storage";
import { useContext } from "react";

export const useAvatar = () => {
    const { selectedAvatar, setSelectedAvatar } = useContext(AvatarContext);

    const selectAvatar = async (avatarName) => {
        const character = characters.find((char) => char.name === avatarName);

        if (character) {
            const avatarUrl = character.happy;

            setSelectedAvatar(avatarUrl);
            local.save("avatarSelected", avatarUrl);
            console.log(avatarUrl);
        }
    };

    return { selectAvatar, selectedAvatar, setSelectedAvatar };
};
