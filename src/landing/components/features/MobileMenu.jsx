import { Button } from "@/components/Button";
import { useGoTo } from "@/hooks/useGoTo";
import { Navbar } from "@/layouts/Navbar";
import { LanguageSelector } from "@/translations/LanguageSelector";
import { useTranslate } from "@/translations/useTranslate";
import classNames from "classnames";

export const MobileMenu = ({ isOpen, toggleMenu }) => {
    const { t } = useTranslate();
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
                    <LanguageSelector placement="bottom" align="right" />
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
                        {t("navbar.sign_in")}
                    </Button>
                    <Button
                        className="w-1/2"
                        onClick={() => {
                            toggleMenu();
                            goTo("/register");
                        }}
                    >
                        {t("navbar.sign_up")}
                    </Button>
                </div>
            </div>
        </div>
    );
};
