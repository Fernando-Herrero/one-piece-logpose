import { AvatarContext } from "@/context/AvatarContext";
import { useContext } from "react";

export const AvatarArticle = ({ character, selectAvatar }) => {
    const { selectedAvatar } = useContext(AvatarContext);

    return (
        <article
            key={character.name}
            className="flex flex-col items-center justify-center"
            onClick={() => selectAvatar(character.name)}
        >
            <div
                className={`group w-[60px] rounded-full overflow-hidden relative shadow-default transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1.5 ${
                    selectedAvatar === character.happy
                        ? "ring-4 ring-pink-400 rounded-full scale-110 transition-transform"
                        : ""
                }`}
            >
                <div className="block w-full object-cover">
                    <img
                        src={character.serious}
                        alt={`${character.name} serio`}
                        className="block w-full object-cover"
                    />
                </div>
                <div
                    className={`absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none ${
                        selectedAvatar === character.name ? "opacity-100" : ""
                    }`}
                >
                    <img
                        src={character.happy}
                        alt={`${character.name} feliz`}
                        className="block w-full object-cover"
                    />
                </div>
            </div>
            <p className="mt-2 font-extrabold text-center text-gradient">{character.name}</p>
        </article>
    );
};
