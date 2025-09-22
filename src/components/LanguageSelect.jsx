import { DropDown } from "@/components/Dropdown";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const LanguageSelect = () => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { lang, setLang } = useContext(LanguagesContext);

    const languages = {
        es: { flag: "🇪🇸", label: "Español" },
        en: { flag: "🇬🇧", label: "English" },
    };

    const handleLangChange = (code) => {
        setLang(code);
        toggleMenu();
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center gap-2 border border-orangeAce/20 bg-transparent px-2 py-1 rounded-xl cursor-pointer transition hover:bg-orangeAce/10"
            >
                <span>{languages[lang].flag}</span>
                <span className="hidden text-gradient md:block">{languages[lang].label}</span>
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" placement="bottom" align="left">
                <div className="flex flex-col">
                    {Object.entries(languages).map(([code, { flag, label }]) => (
                        <button
                            key={code}
                            onClick={() => handleLangChange(code)}
                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-orangeAce/10 rounded-md cursor-pointer"
                        >
                            <span>{flag}</span>
                            <span className="text-gradient">{label}</span>
                        </button>
                    ))}
                </div>
            </DropDown>
        </div>
    );
};
