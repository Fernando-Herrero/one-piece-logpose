import { AvatarArticle } from "@/components/AvatarArticle";
import { characters } from "@/helpers/avatarImages";
import { useAvatar } from "@/hooks/useAvatar";

export const AvatarSelected = () => {
    const { handleAvatar } = useAvatar();

    return (
        <section className="w-full flex items-center justify-center gap-2.5 pt-2">
            {characters.map((character, index) => (
                <AvatarArticle
                    key={`${character}-${index}`}
                    character={character}
                    handleAvatar={handleAvatar}
                />
            ))}
        </section>
    );
};
