import helpIcon from "@/assets/icons/help-icon.svg";
import settings from "@/assets/icons/settings-icon.svg";
import trolley from "@/assets/icons/trolley-icon.svg";
import { DarkTheme } from "@/dashboard/components/DarkTheme";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { Navbar } from "@/layouts/Navbar";
import { LanguageSelector } from "@/translations/LanguageSelector";
import { useTranslate } from "@/translations/useTranslate";
import { useEffect, useRef } from "react";

export const SideBar = () => {
    const [isOpen, toggleMenu] = useToggle();
    const { t } = useTranslate();
    const containRef = useRef(null);
    const { goTo } = useGoTo();

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
            className="fixed flex flex-col w-fit h-screen bg-gradient-primary border-r-2 border-primary p-2 text-sm mt-11 pb-40 z-5 sm:mb-20 md:p-4 md:mt-13"
        >
            <Navbar ref={containRef} isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className="flex flex-col items-center gap-2 pl-1 mt-auto md:items-start md:text-base md:mb-20">
                <DarkTheme />
                <LanguageSelector placement="bottom" align="left" />

                <a
                    className="flex items-center gap-1 py-2"
                    href="http://example.com/help"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="w-5" src={helpIcon} alt="Help icon" />
                    <span className="hidden text-gradient md:block">{t("navbar.help")}</span>
                </a>

                <button
                    className="flex items-center gap-1 py-2 cursor-pointer"
                    onClick={() => goTo("/dashboard/settings")}
                >
                    <img className="w-4" src={settings} alt="Settings icon" />
                    <span className="hidden text-gradient md:block">{t("navbar.settings")}</span>
                </button>

                <button
                    className="flex items-center gap-1 py-2 cursor-pointer"
                    onClick={() => goTo("/dashboard/purchases")}
                >
                    <img className="w-4" src={trolley} alt="Settings icon" />
                    <span className="hidden text-gradient md:block">{t("navbar.purchases")}</span>
                </button>
            </div>
        </aside>
    );
};
