import { useContext } from "react";
import plusIcon from "../assets/icons/plus-icon.svg";
import { Container } from "../components/ui/Container";
import { LoadingDots } from "../components/ui/LoadingDots";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";
import { useFetch } from "../hooks/useFetch";
import { useToggle } from "../hooks/useToggle";

export const SagasLayout = ({ children }) => {
    const { data, loading, error } = useFetch("https://api.api-onepiece.com/v2/sagas/en");

    const [show, toggleShow] = useToggle();

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
                {data?.map(({ id, title, saga_episode }) => {
                    const isExpanded = show[id];

                    return (
                        <div key={`${title}-${id}`}>
                            <div
                                className={`flex items-center justify-between p-2 bg-orange border border-black shadow-default ${
                                    isExpanded ? "rounded-tr rounded-tl" : "rounded"
                                }`}
                            >
                                <h3 className="font-bold text-2xl flex items-center gap-4">
                                    {title}
                                    <span className="text-sm">{saga_episode}</span>
                                </h3>

                                <button
                                    type="button"
                                    className="w-4 cursor-pointer"
                                    onClick={() => {
                                        toggleShow(id);
                                        console.log(id);
                                    }}
                                    aria-expanded={isExpanded}
                                    aria-controls={`saga-content-${id}`}
                                    aria-label={`${
                                        isExpanded ? "Contraer" : "Expandir"
                                    } detalles de ${title}`}
                                >
                                    <img
                                        className={`w-full bg-white transition-transform duration-500 ${
                                            isExpanded ? "rotate-135" : "rotate-0"
                                        }`}
                                        src={plusIcon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            <div
                                id={`saga-content-${id}`}
                                className={`overflow-hidden bg-secondary shadow-default mx-[2px] border-l border-r border-b border-linePrimary transition-all duration-500 ease-in-out ${
                                    isExpanded
                                        ? "opacity-100 max-h-96 p-2 rounded-bl rounded-br"
                                        : "opacity-0 max-h-0 p-0 border-b-0"
                                }`}
                                role="region"
                                aria-labelledby={`saga-header-${title}`}
                            >
                                {children} || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                consectetur, ab nulla blanditiis repellat repellendus animi vel ex veritatis
                                mollitia odio quia impedit, cumque, delectus iste minima in? Veniam,
                                architecto!
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};
