import logo from "@/assets/images/one-piece-logo.webp";
import { Button } from "@/components/Button.jsx";
import { useGoTo } from "@/hooks/useGoTo";
import { HeaderMenuController } from "@/landing/components/features/HeaderMenuController";
import { Container } from "@/landing/components/ui/Container.jsx";
import { Navbar } from "@/layouts/Navbar";
import { useTranslate } from "@/translations/useTranslate";
import { Link } from "react-router-dom";

export const Header = () => {
    const { t } = useTranslate();
    const { goTo } = useGoTo();

    return (
        <header className="fixed top-0 right-0 left-0 z-index-5 h-fit bg-transparent pt-6 z-100 md:backdrop-blur-sm">
            <Container className="relative z-5 flex items-center justify-between h-fit w-full py-1 text-black md:text-primary">
                <Link className="w-20" to={"/home"}>
                    <img className="w-full" src={logo} alt="Logo One Piece" />
                </Link>

                <div className="flex gap-6">
                    <div className="hidden md:flex">
                        <Navbar />
                    </div>

                    <div className="hidden md:flex gap-2">
                        <Button onClick={() => goTo("/login")}>{t("navbar.sign_in")}</Button>
                        <Button onClick={() => goTo("/register")}>{t("navbar.sign_up")}</Button>
                    </div>
                </div>

                <HeaderMenuController />
            </Container>
        </header>
    );
};
