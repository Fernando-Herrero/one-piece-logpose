import helpIcon from "@/assets/icons/help-icon.svg";
import settings from "@/assets/icons/settings-icon.svg";
import { LanguageSelect } from "@/components/LanguageSelect";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { Navbar } from "@/layouts/Navbar";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
    const [isOpen, toggleMenu] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const containRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && containRef.current && !containRef.current.contains(event.target)) {
                toggleMenu();
            }
        };

        if (isOpen) {
            window.addEventListener("mousedown", handleClickOutside);
        }

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, toggleMenu]);

    return (
        <aside
            ref={containRef}
            className="fixed flex flex-col w-fit h-screen bg-gradient-primary border-r-2 border-primary p-2 text-sm mt-11 pb-20 z-5"
        >
            <Navbar ref={containRef} isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className="flex flex-col items-center gap-2 pl-1 mt-auto md:items-start">
                <LanguageSelect placement="bottom" align="left" />

                <Link className="flex items-center gap-1 py-2" to="/help">
                    <img className="w-5" src={helpIcon} alt="Help icon" />
                    <span className="hidden text-gradient md:block">{languages[lang].navbar.help}</span>
                </Link>

                <button className="flex items-center gap-1 py-2 cursor-pointer">
                    <img className="w-4" src={settings} alt="Settings icon" />
                    <span className="hidden text-gradient md:block">{languages[lang].navbar.settings}</span>
                </button>
            </div>
        </aside>
    );
};
