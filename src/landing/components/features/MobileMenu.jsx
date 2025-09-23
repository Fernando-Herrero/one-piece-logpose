import { Button } from "@/components/Button";
import { LanguageSelect } from "@/components/LanguageSelect";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { Navbar } from "@/layouts/Navbar";
import classNames from "classnames";
import { useContext } from "react";

export const MobileMenu = ({ isOpen, toggleMenu }) => {
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    return (
        <div
            id="mobile-menu"
            className={classNames(
                "fixed top-0 right-0 left-0 px-5 h-full pt-20 pb-10 z-10",
                "bg-gradient-to-br from-primary to-orange-200 shadow-default",
                "transition-all duration-300 ease-out md:hidden",
                {
                    "translate-x-0 opacity-100 visible": isOpen,
                    "translate-x-full opacity-0 invisible": !isOpen,
                }
            )}
        >
            <div className="flex flex-col min-w-0 pt-10 px-2 space-y-5">
                <div className="ml-auto">
                    <LanguageSelect placement="bottom" align="right" />
                </div>

                <Navbar toggleMenu={toggleMenu} />

                <div className="w-full flex items-center gap-3 border-t border-white/50 pt-8 pb-2">
                    <Button
                        className="w-1/2"
                        onClick={() => {
                            toggleMenu();
                            goTo("/login");
                        }}
                    >
                        {languages[lang].navbar.signIn}
                    </Button>
                    <Button
                        className="w-1/2"
                        onClick={() => {
                            toggleMenu();
                            goTo("/register");
                        }}
                    >
                        {languages[lang].navbar.signUp}
                    </Button>
                </div>
            </div>
        </div>
    );
};
