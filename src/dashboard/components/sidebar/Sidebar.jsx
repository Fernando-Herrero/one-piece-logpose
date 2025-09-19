import helpIcon from "@/assets/icons/help-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { LanguageSelect } from "@/landing/components/ui/LanguageSelect";
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

            <div className="flex flex-col gap-2 mt-auto">
                <Link className="flex items-center gap-1" to="/help">
                    <img className="w-4" src={helpIcon} alt="Help icon" />
                    <span className="text-gradient">{languages[lang].navbar.help}</span>
                </Link>
                <LanguageSelect className="mr-auto" />
            </div>
        </aside>
    );
};
