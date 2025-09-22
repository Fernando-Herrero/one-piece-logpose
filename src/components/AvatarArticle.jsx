import { AvatarContext } from "@/context/AvatarContext";
import { useContext } from "react";

export const AvatarArticle = ({ character, handleAvatar }) => {
    const { selectedAvatar } = useContext(AvatarContext);

    return (
        <article
            key={character.name}
            className="flex flex-col items-center justify-center"
            onClick={() => handleAvatar(character.name)}
        >
            <div
                className={`group w-[60px] rounded-full overflow-hidden relative transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1.5  shadow-default ${
                    selectedAvatar === character.name
                        ? "ring-4 ring-pink-400 rounded-full scale-110 transition-transform"
                        : ""
                }`}
            >
                <picture className="block w-full object-cover">
                    <source srcSet={character.serious[2]} media="(min-width: 1024px)" type="image/webp" />
                    <source srcSet={character.serious[1]} media="(min-width: 700px)" type="image/webp" />
                    <source srcSet={character.serious[0]} media="(min-width: 400px)" type="image/webp" />
                    <img
                        src={character.serious[0]}
                        alt={`${character.name} serio`}
                        className="block w-full object-cover"
                    />
                </picture>
                <picture
                    className={`absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none ${
                        selectedAvatar === character.name ? "opacity-100" : ""
                    }`}
                >
                    <source srcSet={character.happy[2]} media="(min-width: 1024px)" type="image/webp" />
                    <source srcSet={character.happy[1]} media="(min-width: 700px)" type="image/webp" />
                    <source srcSet={character.happy[0]} media="(min-width: 400px)" type="image/webp" />
                    <img
                        src={character.happy[0]}
                        alt={`${character.name} feliz`}
                        className="block w-full object-cover"
                    />
                </picture>
            </div>
            <p className="mt-2 font-extrabold text-center text-gradient">{character.name}</p>
        </article>
    );
};
