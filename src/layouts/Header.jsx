import logo from "@/assets/images/one-piece-logo.webp";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages.js";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { MobileMenu } from "@/landing/components/features/MobileMenu";
import { Button } from "@/landing/components/ui/Button.jsx";
import { ButtonMobileMenu } from "@/landing/components/ui/ButtonMobileMenu";
import { Container } from "@/landing/components/ui/Container.jsx";
import { Navbar } from "@/layouts/Navbar";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const { lang } = useContext(LanguagesContext);
    const [isOpen, toggleMenu] = useToggle();
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
                        <Button variant="primary" onClick={() => goTo("/login")}>
                            {languages[lang].navbar.signIn}
                        </Button>
                        <Button variant="primary" onClick={() => goTo("/register")}>
                            {languages[lang].navbar.signUp}
                        </Button>
                    </div>
                </div>

                <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

                <ButtonMobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </Container>
        </header>
    );
};
