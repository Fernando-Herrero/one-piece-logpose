import luffyLies from "@/assets/images/luffy-lies.webp";
import lettersBg from "@/assets/images/onepiece-japanese.webp";
import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { CharacterCard } from "@/landing/components/ui/CharacterCard";
import { Container } from "@/landing/components/ui/Container";
import { getCharacters } from "@/landing/data/getCharacters";
import { useContext, useState } from "react";

export const CharactersPage = () => {
    const { lang } = useContext(LanguagesContext);
    const characters = getCharacters(lang);
    const [visibleChars, setVisibleChars] = useState(characters.slice(0, 5));

    return (
        <Container className="h-full w-full">
            <section
                className="bg-cover bg-no-repeat bg-center h-full w-full flex flex-col items-center gap-4 pb-20"
                style={{ backgroundImage: `url(${lettersBg})` }}
            >
                <div className="grid grid-cols-1 justify-items-center gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:justify-items-normal lg:grid-cols-2 lg:overflow-visible">
                    {visibleChars.map((char, index) => (
                        <CharacterCard
                            key={char.name}
                            name={char.name}
                            text={char.text}
                            images={char.images}
                            isLast={index === visibleChars.length - 1}
                        />
                    ))}
                </div>

                <div className="flex flex-col items-center gap-2 text-center rounded-xl bg-secondary backdrop-blur-sm p-6">
                    <p className="text-gradient-secondary">{languages[lang].characters.finalText}</p>
                    <img className="w-30 shadow-default rounded-2xl" src={luffyLies} alt="Luffy face lying" />
                    <p className="text-gradient-secondary">{languages[lang].characters.finalTextTwo}</p>
                    <Button variant="danger" onClick={() => setVisibleChars(characters)}>
                        Ver
                    </Button>
                </div>
            </section>
        </Container>
    );
};
