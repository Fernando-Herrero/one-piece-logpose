import { AvatarArticle } from "@/components/AvatarArticle";
import { characters } from "@/helpers/avatarImages";
import { useAvatar } from "@/hooks/useAvatar";

export const AvatarSelected = ({ className = "" }) => {
    const { selectAvatar } = useAvatar();

    return (
        <section className={`flex flex-wrap items-center gap-2 justify-center ${className}`}>
            {characters.map((character, index) => (
                <AvatarArticle
                    key={`${character}-${index}`}
                    character={character}
                    selectAvatar={selectAvatar}
                />
            ))}
        </section>
    );
};
