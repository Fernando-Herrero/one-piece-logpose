import { useContext } from "react";
import { Container } from "../components/Container";
import { LanguageSelect } from "../components/LanguageSelect";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";

export const Footer = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <footer className="border-t border-linePrimary py-1">
            <Container className="flex flex-col items-center text-center gap-1">
                <LanguageSelect />

                <div className="flex flex-col gap-0.5 text-xs">
                    <p>{languages[lang].footer.disclaimer}</p>
                    <p>
                        {" "}
                        &copy; {new Date().getFullYear()} {languages[lang].footer.copyright}
                    </p>
                </div>
            </Container>
        </footer>
    );
};
