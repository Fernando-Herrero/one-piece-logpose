import lens from "@/assets/icons/lens-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { useContext } from "react";

export const Search = () => {
    const [isOpen, toggleSearch, closeSearch] = useToggle();
    const { lang } = useContext(LanguagesContext);

    const handleKeyDown = (e) => {
        if (e.key === "Escape" && isOpen) {
            closeSearch();
        }
    };

    const handleInputClick = (e) => {
        e.stopPropagation();
        if (!isOpen) {
            toggleSearch();
        }
    };

    return (
        <div className="flex items-center bg-orange-100 rounded-2xl px-2 py-1">
            <label className="flex items-center flex-1" htmlFor="search">
                <span className="sr-only">{languages[lang].navbar.search}</span>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className={classNames(
                        "bg-transparent text-xs text-gray-600 placeholder-gray-600 focus:outline-none transition-all duration-300 ease-out",
                        {
                            "w-25 opacity-100 px-2 sm:w-40": isOpen,
                            "w-0 opacity-0 px-0": !isOpen,
                        }
                    )}
                    placeholder={isOpen ? languages[lang].navbar.search : ""}
                    onClick={handleInputClick}
                    onKeyDown={handleKeyDown}
                    aria-expanded={isOpen}
                    aria-label={languages[lang].navbar.search}
                />
            </label>
            <button
                type="button"
                aria-label={isOpen ? "Cerrar búsqueda" : "Abrir búsqueda"}
                aria-expanded={isOpen}
                className={classNames(
                    "w-5 h-5 flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:scale-110 focus:outline-none rounded",
                    {
                        "rotate-90 ring-2 ring-orange-200 animate-pulse": isOpen,
                        "rotate-0 focus:ring-2 focus:ring-orange-200 focus:ring-offset-1": !isOpen,
                    }
                )}
                onClick={toggleSearch}
            >
                <img className="w-4 transition-opacity duration-300" src={lens} alt="" role="presentation" />
            </button>
        </div>
    );
};
