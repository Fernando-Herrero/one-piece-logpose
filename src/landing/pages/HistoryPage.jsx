import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { Container } from "@/landing/components/ui/Container";
import { useContext } from "react";
import { Link } from "react-router-dom";

const historyOnePiece = (lang) => [
    {
        section: languages[lang].history.secIntro,
        content: languages[lang].history.contentIntro,
    },
    {
        section: languages[lang].history.secSynopsis,
        content: languages[lang].history.contentSynopsis,
    },
    {
        section: languages[lang].history.secCharacters,
    },
    {
        section: languages[lang].history.secArcs,
        content: languages[lang].history.contentArcs,
        subContent: languages[lang].history.subContentArcs,
    },
    {
        section: languages[lang].history.secWorld,
        content: languages[lang].history.contentWorld,
        subContent: languages[lang].history.subContentWorld,
    },
    {
        section: languages[lang].history.secFun,
        content: languages[lang].history.contentFun,
        subContent: languages[lang].history.subContentFun,
    },
];

export const HistoryPage = () => {
    const { lang } = useContext(LanguagesContext);
    const history = historyOnePiece(lang);

    return (
        <Container className="flex flex-col gap-4 pb-20 relativerelative p-6 relative rounded-xl border-4 border-yellow-800 border-dashed shadow-lg bg-amber-50 filter contrast-150">
            <div className="absolute top-2 left-2">⚔️</div>
            <div className="absolute bottom-2 right-2">⚓</div>
            {history.map(({ section, content, subContent }, index) => {
                const charactersSec = section === languages[lang].history.secCharacters;

                return (
                    <section key={`${section}-${index}`} className="flex flex-col gap-2 pt-5">
                        <h2 className="text-primary font-family-pirate text-xl underline">{section}</h2>
                        {charactersSec ? (
                            <Link
                                className="text-secondary flex items-center gap-2 transition-transform group hover:-translate-y-0.5"
                                to="/characters"
                            >
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                                <p className="underline">{languages[lang].history.secCharacters}</p>
                                <span className="transition-transform group-hover:-translate-x-1">←</span>
                            </Link>
                        ) : (
                            <p className="text-muted">{content}</p>
                        )}
                        {subContent && (
                            <ul>
                                {subContent.map((item, subIndex) => (
                                    <li
                                        className="list-disc list-inside pl-2 text-muted"
                                        key={`${item}-${subIndex}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                );
            })}
        </Container>
    );
};
