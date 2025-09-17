import { LanguagesContext } from "@/context/LanguagesContext";
import { ALL_SAGAS } from "@/dashboard/data/serieData/allSagas";
import { languages } from "@/helpers/languages";
import { useFetch } from "@/hooks/useFetch";
import { Container } from "@/landing/components/ui/Container";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import classNames from "classnames";
import { useContext, useState } from "react";

export const SagasLayout = ({ children }) => {
    const { data, loading, error } = useFetch("https://api.api-onepiece.com/v2/sagas/en");

    const [show, setShow] = useState({});

    const handleShow = (id) => {
        setShow((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const { lang } = useContext(LanguagesContext);

    if (loading) {
        return (
            <p className="flex justify-center items-center pt-4 text-4xl gap-2">
                {languages[lang].sagaData.sagaLoading}
                <LoadingDots />
            </p>
        );
    }
    if (error) return <p className="flex justify-center text-linePrimary">{error}</p>;

    return (
        <Container>
            <div className="pt-4 text-primary space-y-2">
                {data?.slice(0, 8).map(({ id, title }) => {
                    const isExpanded = show[id] || false;

                    return (
                        <section
                            key={`${title}-${id}`}
                            className="flex flex-col gap-2 p-3 bg-orange border border-black rounded shadow-default transition hover:-translate-y-0.5"
                        >
                            <header
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => handleShow(id)}
                            >
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-2xl">{title}</h3>
                                    <div className="text-xs text-muted/80">
                                        {ALL_SAGAS.map((saga) => (
                                            <span key={saga?.id}>
                                                {saga?.id === id
                                                    ? `${saga.name_japanese} - ${saga.total_episodes} ${languages[lang].sagaData.episodes}`
                                                    : ""}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={classNames(
                                        "text-white text-3xl w-8 h-8 p-2 flex items-center justify-center font-mono leading-none",
                                        "transition-transform duration-300 rounded-full",
                                        { "rotate-[135deg]": isExpanded }
                                    )}
                                    aria-expanded={isExpanded}
                                    aria-controls={`saga-content-${id}`}
                                    aria-label={`${
                                        isExpanded ? "Contraer" : "Expandir"
                                    } detalles de ${title}`}
                                >
                                    +
                                </button>
                            </header>

                            <div
                                id={`saga-content-${id}`}
                                className={classNames(
                                    "overflow-hidden bg-secondary/60 shadow-default rounded border border-linePrimary grid transition-[grid-template-rows] duration-300 ease-out",
                                    {
                                        "p-1 [grid-template-rows:1fr]": isExpanded,
                                        "[grid-template-rows:0fr]": !isExpanded,
                                    }
                                )}
                                role="region"
                                aria-labelledby={`saga-header-${title}`}
                            >
                                <div className="min-h-0">
                                    {children} || Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ipsa consectetur, ab nulla blanditiis repellat repellendus animi vel ex
                                    veritatis mollitia odio quia impedit, cumque, delectus iste minima in?
                                    Veniam, architecto!
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </Container>
    );
};
