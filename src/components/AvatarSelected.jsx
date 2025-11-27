import { AvatarArticle } from "@/components/AvatarArticle";
import { characters } from "@/helpers/avatarImages";
import { useAvatar } from "@/hooks/useAvatar";
import { useMemo } from "react";

export const AvatarSelected = ({ className = "" }) => {
    const { selectAvatar } = useAvatar();

    const charactersMemoized = useMemo(
        () =>
            characters.map((character) => (
                <AvatarArticle key={character.name} character={character} selectAvatar={selectAvatar} />
            )),
        [selectAvatar]
    );

    return (
        <section className={`flex flex-wrap items-center gap-2 justify-center ${className}`}>
            {charactersMemoized}
        </section>
    );
};
