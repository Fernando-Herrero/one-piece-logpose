import lens from "@/assets/icons/lens-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { useContext, useState } from "react";

export const Search = () => {
    const [isOpen, toggleSearch, closeSearch] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const [search, setSearch] = useState("");
    const { goTo } = useGoTo();
    const searchref = useClickOutside(toggleSearch, isOpen);

    const handleKeyDown = (event) => {
        if (event.key === "Escape" && isOpen) {
            closeSearch();
        }
        if (event.key === "Enter" && search.trim()) {
            handleSearch();
        }
    };

    const handleInputClick = (event) => {
        event.stopPropagation();
        if (!isOpen) {
            toggleSearch();
        }
    };

    const handleSearch = () => {
        if (search.trim()) {
            goTo(`/dashboard/search?q=${encodeURIComponent(search)}`);
            closeSearch();
            setSearch("");
        }
    };

    return (
        <div ref={searchref} className="flex items-center bg-sunny rounded-2xl px-2 py-1">
            <label className="flex items-center flex-1" htmlFor="search">
                <span className="sr-only">{languages[lang].navbar.search}</span>
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={search}
                    className={classNames(
                        "text-xs bg-sunny focus:outline-none transition-all duration-300 ease-out text-muted",
                        {
                            "w-25 opacity-100 px-2 sm:w-40": isOpen,
                            "w-0 opacity-0 px-0": !isOpen,
                        }
                    )}
                    placeholder={isOpen ? languages[lang].navbar.search : ""}
                    onClick={handleInputClick}
                    onChange={(event) => setSearch(event.target.value)}
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
                    "w-5 h-5 flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:scale-110 focus:outline-none rounded md:w-7 md:h-7",
                    {
                        "rotate-90 ring-2 ring-orange-200 animate-pulse": isOpen,
                        "rotate-0 focus:ring-2 focus:ring-orange-200 focus:ring-offset-1": !isOpen,
                    }
                )}
                onClick={isOpen ? handleSearch : toggleSearch}
            >
                <img
                    className="w-4 transition-opacity duration-300 md:w-6"
                    src={lens}
                    alt=""
                    role="presentation"
                />
            </button>
        </div>
    );
};
