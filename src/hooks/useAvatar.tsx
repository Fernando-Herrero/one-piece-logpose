import { useCallback, useContext } from "react";
import { AvatarContext } from "../context/AvatarContext";
import { characters } from "../helpers/avatarImages";
import { local } from "../helpers/storage";

export const useAvatar = () => {
    const context = useContext(AvatarContext);
    if (!context) throw new Error("useAvatar must be used within an AvatarProvider");
    const { selectedAvatar, setSelectedAvatar } = context;

    const selectAvatar = useCallback(
        async (avatarName: string) => {
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
