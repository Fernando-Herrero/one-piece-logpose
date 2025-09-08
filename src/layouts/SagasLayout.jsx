import { useContext } from "react";
import plusIcon from "../assets/icons/plus-icon.svg";
import { Container } from "../components/ui/Container";
import { LoadingDots } from "../components/ui/LoadingDots";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";
import { useFetch } from "../hooks/useFecth";
import { useToggle } from "../hooks/useToggle";

export const SagasLayout = ({ children }) => {
    const { data, loading, error } = useFetch("https://api.api-onepiece.com/v2/sagas/en");

    const { show, toggleShow } = useToggle();

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
            <div className="pt-4 text-primary text-stroke">
                {data &&
                    data.map(({ id, title, saga_episode }) => (
                        <div
                            key={`${title}-${id}`}
                            className="flex items-center justify-between p-2 bg-orange border border-black rounded shadow-default"
                        >
                            <h3 className="font-bold text-2xl flex items-center gap-4">
                                {title}
                                <span className="text-sm">{saga_episode}</span>
                            </h3>

                            <div className="w-4" onClick={toggleShow}>
                                <img
                                    className={`w-full bg-white cursor-pointer transition-transform duration-500 ${
                                        show ? "rotate-90" : "rotate-0"
                                    }`}
                                    src={plusIcon}
                                    alt="plus icon"
                                />
                            </div>
                        </div>
                    ))}

                {show && <div className={`transiti`}>{children}</div>}
            </div>
        </Container>
    );
};
