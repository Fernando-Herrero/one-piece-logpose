import { Container } from "@/landing/components/ui/Container";
import { useTranslate } from "@/translations/useTranslate";
import { Link } from "react-router-dom";

const historyOnePiece = (t) => [
    {
        section: t("history.section_intro"),
        content: t("history.content_intro"),
    },
    {
        section: t("history.section_synopsis"),
        content: t("history.content_synopsis"),
    },
    {
        section: t("history.section_characters"),
    },
    {
        section: t("history.section_arcs"),
        content: t("history.content_arcs"),
        subContent: t("history.sub_content_arcs"),
    },
    {
        section: t("history.section_world"),
        content: t("history.content_world"),
        subContent: t("history.sub_content_world"),
    },
    {
        section: t("history.section_fun"),
        content: t("history.content_fun"),
        subContent: t("history.sub_content_fun"),
    },
];

const HistoryPage = () => {
    const { t } = useTranslate();
    const history = historyOnePiece(t);

    return (
        <Container className="flex flex-col gap-4 pb-10 mb-10 relativerelative p-6 relative rounded-xl border-4 border-yellow-800 border-dashed shadow-lg bg-amber-50 filter contrast-150">
            <div className="absolute top-2 left-2">⚔️</div>
            <div className="absolute bottom-2 right-2">⚓</div>
            {history.map(({ section, content, subContent }, index) => {
                const charactersSec = section === t("history.section_characters");

                return (
                    <section key={`${section}-${index}`} className="flex flex-col gap-2 pt-5">
                        <h2 className="text-primary font-family-pirate text-xl underline">{section}</h2>
                        {charactersSec ? (
                            <Link
                                className="text-secondary flex items-center gap-2 transition-transform group hover:-translate-y-0.5"
                                to="/characters"
                            >
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                                <p className="underline">{t("history.section_characters")}</p>
                                <span className="transition-transform group-hover:-translate-x-1">←</span>
                            </Link>
                        ) : (
                            <p className="text-muted">{content}</p>
                        )}
                        {subContent && Array.isArray(subContent) && (
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

export default HistoryPage;
