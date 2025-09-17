import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { Container } from "@/landing/components/ui/Container";
import { LanguageSelect } from "@/landing/components/ui/LanguageSelect";
import { useContext } from "react";

export const Footer = () => {
    const { lang } = useContext(LanguagesContext);
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-linePrimary py-2 relative z-100">
            <Container className="flex flex-col items-center text-center gap-1">
                <div className="hidden md:flex">
                    <LanguageSelect />
                </div>

                <div className="flex flex-col gap-0.5 text-xs">
                    <p>{languages[lang].footer.disclaimer}</p>
                    <p>
                        &copy; {year} {languages[lang].footer.copyright}
                    </p>
                </div>
            </Container>
        </footer>
    );
};
