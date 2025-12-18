import { DropDown } from "@/components/Dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToggle } from "@/hooks/useToggle";
import { useTranslation } from "react-i18next";

export const LanguageSelector = ({ placement, align }) => {
    const { i18n } = useTranslation();
    const languages = Object.keys(i18n.options.resources);
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const menuRef = useClickOutside(toggleMenu, isOpen);

    const languagesMap = {
        es: { flag: "🇪🇸", label: "Español" },
        en: { flag: "🇬🇧", label: "English" },
        ja: { flag: "🇯🇵", label: "日本語" },
    };

    const handleLanguage = (language) => {
        i18n.changeLanguage(language);
        toggleMenu();
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center gap-2 border border-orangeAce/20 bg-transparent px-2 py-1 rounded-xl cursor-pointer transition hover:bg-orangeAce/10"
            >
                <span>{languagesMap[i18n.language].flag}</span>
                <span className="hidden text-gradient md:block">{languagesMap[i18n.language].label}</span>
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" placement={placement} align={align}>
                <div className="flex flex-col">
                    {languages.map((language) => (
                        <button
                            key={language}
                            onClick={() => handleLanguage(language)}
                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-orangeAce/10 rounded-md cursor-pointer"
                        >
                            <span>{languagesMap?.[language].flag}</span>
                            <span className="text-gradient">{languagesMap[language]?.label || "Idioma"}</span>
                        </button>
                    ))}
                </div>
            </DropDown>
        </div>
    );
};
