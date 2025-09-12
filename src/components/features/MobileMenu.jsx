import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { LanguagesContext } from "../../context/LanguagesContext";
import { languages } from "../../data/languages";
import { useGoTo } from "../../hooks/useGoTo";
import { Navbar } from "../../layouts/Navbar";
import { Button } from "../ui/Button";

export const MobileMenu = ({ isOpen }) => {
    const { user } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const handleLogOut = () => {};
    const handleReset = () => {
        goTo("/");
    };

    return (
        <div
            id="mobile-menu"
            className={classNames(
                "fixed top-0 right-0 left-0 px-5 pt-20 pb-10 z-10",
                "bg-gradient-to-br from-primary to-orange-200 shadow-default",
                "transition-all duration-300 ease-out",
                {
                    "translate-x-0 opacity-100 visible": isOpen,
                    "translate-x-full opacity-0 invisible": !isOpen,
                }
            )}
        >
            <div className="min-w-0 pt-10 px-2 space-y-5">
                <Navbar />

                {!user && (
                    <div className="w-full flex items-center gap-3 border-t border-white/50 pt-8 pb-2">
                        <Button className="w-1/2" onClick={() => goTo("/login")}>
                            {languages[lang].navbar.signIn}
                        </Button>
                        <Button className="w-1/2" onClick={() => goTo("/register")}>
                            {languages[lang].navbar.signUp}
                        </Button>
                    </div>
                )}

                {user && (
                    <div className="w-full flex items-center gap-3 border-t border-white/50 pt-8 pb-2">
                        <Button variant="danger" onClick={handleLogOut}>
                            {languages[lang].navbar.logOut}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
