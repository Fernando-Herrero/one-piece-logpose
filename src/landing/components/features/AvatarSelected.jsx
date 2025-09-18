// Luffy
import luffyH1024 from "/src/assets/images/avatars/luffy/luffy-happy-1024.webp";
import luffyH400 from "/src/assets/images/avatars/luffy/luffy-happy-400.webp";
import luffyH700 from "/src/assets/images/avatars/luffy/luffy-happy-700.webp";
import luffyS1024 from "/src/assets/images/avatars/luffy/luffy-serious-1024.webp";
import luffyS400 from "/src/assets/images/avatars/luffy/luffy-serious-400.webp";
import luffyS700 from "/src/assets/images/avatars/luffy/luffy-serious-700.webp";

// Zoro
import zoroH1024 from "/src/assets/images/avatars/zoro/zoro-happy-1024.webp";
import zoroH400 from "/src/assets/images/avatars/zoro/zoro-happy-400.webp";
import zoroH700 from "/src/assets/images/avatars/zoro/zoro-happy-700.webp";
import zoroS1024 from "/src/assets/images/avatars/zoro/zoro-serious-1024.webp";
import zoroS400 from "/src/assets/images/avatars/zoro/zoro-serious-400.webp";
import zoroS700 from "/src/assets/images/avatars/zoro/zoro-serious-700.webp";

// Nami
import namiH1024 from "/src/assets/images/avatars/nami/nami-happy-1024.webp";
import namiH400 from "/src/assets/images/avatars/nami/nami-happy-400.webp";
import namiH700 from "/src/assets/images/avatars/nami/nami-happy-700.webp";
import namiS1024 from "/src/assets/images/avatars/nami/nami-serious-1024.webp";
import namiS400 from "/src/assets/images/avatars/nami/nami-serious-400.webp";
import namiS700 from "/src/assets/images/avatars/nami/nami-serious-700.webp";

// Sanji
import sanjiH1024 from "/src/assets/images/avatars/sanji/sanji-happy-1024.webp";
import sanjiH400 from "/src/assets/images/avatars/sanji/sanji-happy-400.webp";
import sanjiH700 from "/src/assets/images/avatars/sanji/sanji-happy-700.webp";
import sanjiS1024 from "/src/assets/images/avatars/sanji/sanji-serious-1024.webp";
import sanjiS400 from "/src/assets/images/avatars/sanji/sanji-serious-400.webp";
import sanjiS700 from "/src/assets/images/avatars/sanji/sanji-serious-700.webp";

// Usopp
import { AvatarContext } from "@/context/AvatarContext";
import { storage } from "@/helpers/storage";
import { useContext } from "react";
import usoppH1024 from "/src/assets/images/avatars/usopp/usopp-happy-1024.webp";
import usoppH400 from "/src/assets/images/avatars/usopp/usopp-happy-400.webp";
import usoppH700 from "/src/assets/images/avatars/usopp/usopp-happy-700.webp";
import usoppS1024 from "/src/assets/images/avatars/usopp/usopp-serious-1024.webp";
import usoppS400 from "/src/assets/images/avatars/usopp/usopp-serious-400.webp";
import usoppS700 from "/src/assets/images/avatars/usopp/usopp-serious-700.webp";

export const AvatarSelected = () => {
    const { selectedAvatar, setSelectedAvatar } = useContext(AvatarContext);

    const handleAvatar = (name) => {
        setSelectedAvatar((prev) => {
            if (prev === name) {
                storage.remove("avatar");
                return null;
            } else {
                storage.save("avatar", name);
                return name;
            }
        });
    };

    const characters = [
        {
            name: "Luffy",
            serious: [luffyS400, luffyS700, luffyS1024],
            happy: [luffyH400, luffyH700, luffyH1024],
        },
        { name: "Zoro", serious: [zoroS400, zoroS700, zoroS1024], happy: [zoroH400, zoroH700, zoroH1024] },
        { name: "Nami", serious: [namiS400, namiS700, namiS1024], happy: [namiH400, namiH700, namiH1024] },
        {
            name: "Sanji",
            serious: [sanjiS400, sanjiS700, sanjiS1024],
            happy: [sanjiH400, sanjiH700, sanjiH1024],
        },
        {
            name: "Usopp",
            serious: [usoppS400, usoppS700, usoppS1024],
            happy: [usoppH400, usoppH700, usoppH1024],
        },
    ];

    return (
        <section className="w-full flex items-center justify-center gap-2.5 pt-2">
            {characters.map((character) => (
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
                            <source
                                srcSet={character.serious[2]}
                                media="(min-width: 1024px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={character.serious[1]}
                                media="(min-width: 700px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={character.serious[0]}
                                media="(min-width: 400px)"
                                type="image/webp"
                            />
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
                            <source
                                srcSet={character.happy[2]}
                                media="(min-width: 1024px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={character.happy[1]}
                                media="(min-width: 700px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={character.happy[0]}
                                media="(min-width: 400px)"
                                type="image/webp"
                            />
                            <img
                                src={character.happy[0]}
                                alt={`${character.name} feliz`}
                                className="block w-full object-cover"
                            />
                        </picture>
                    </div>
                    <p className="mt-2 font-extrabold text-center text-gradient">{character.name}</p>
                </article>
            ))}
        </section>
    );
};
