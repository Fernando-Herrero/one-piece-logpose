import { AvatarContext } from "@/context/AvatarContext";
import { characters } from "@/helpers/avatarImages";
import { local } from "@/helpers/storage";
import { useCallback, useContext } from "react";

export const useAvatar = () => {
    console.log("Render useAvatar");

    const { selectedAvatar, setSelectedAvatar } = useContext(AvatarContext);

    const selectAvatar = useCallback(
        async (avatarName) => {
            const character = characters.find((char) => char.name === avatarName);

            if (character) {
                const avatarUrl = character.happy;

                setSelectedAvatar(avatarUrl);
                local.save("avatarSelected", avatarUrl);
            }
        },
        [setSelectedAvatar]
    );

    return { selectAvatar, selectedAvatar, setSelectedAvatar };
};
