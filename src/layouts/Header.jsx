import { useContext } from "react";
import logo from "../assets/images/one-piece-logo.webp";
import { MobileMenu } from "../components/features/MobileMenu.jsx";
import { Button } from "../components/ui/Button.jsx";
import { ButtonMobileMenu } from "../components/ui/ButtonMobileMenu.jsx";
import { Container } from "../components/ui/Container.jsx";
import { AuthContext } from "../context/authContext";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages.js";
import { useGoTo } from "../hooks/useGoTo";
import { useToggle } from "../hooks/useToggle";
import { Navbar } from "../layouts/Navbar.jsx";

export const Header = () => {
    const { user } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);
    const [isOpen, toggleMenu] = useToggle();
    const { goTo } = useGoTo();

    return (
        <header className="fixed top-0 right-0 left-0 z-index-5 h-fit bg-transparent pt-6 z-100">
            <Container className="relative z-5 flex items-center justify-between h-fit w-full py-1 text-black md:text-primary">
                <div className="w-20">
                    <img className="w-full" src={logo} alt="Logo One Piece" />
                </div>

                <div className="flex gap-6">
                    <div className="hidden md:flex">
                        <Navbar />
                    </div>

                    {!user && (
                        <div className="hidden md:flex gap-2">
                            <Button onClick={() => goTo("/login")}>{languages[lang].navbar.signIn}</Button>
                            <Button onClick={() => goTo("/register")}>{languages[lang].navbar.signUp}</Button>
                        </div>
                    )}

                    {user && (
                        <div className="hidden md:flex gap-2">
                            <Button variant="danger">Log Out</Button>
                        </div>
                    )}
                </div>

                <MobileMenu isOpen={isOpen} />

                <ButtonMobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </Container>
        </header>
    );
};
