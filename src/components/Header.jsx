import { useContext } from "react";
import logo from "../assets/images/one-piece-logo.png";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";
import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export const Header = () => {
    const [showMenu, toggleMenu] = useToggle(false);
    const { lang } = useContext(LanguagesContext);

    return (
        <header>
            <Container className="relative flex items-center justify-between h-fit w-full py-2 text-white border-b border-lineDark md:text-primary">
                <div className="w-20">
                    <img className="w-full" src={logo} alt="Logo One Piece" />
                </div>

                <div className="hidden md:flex">
                    <Navbar />
                </div>

                <div className="hidden md:flex gap-2">
                    <Button className=" bg-linePrimary transition hover:bg-lineDark text-white">
                        Log Out
                    </Button>
                    <Button className=" bg-linePrimary transition hover:bg-lineDark text-white">Reset</Button>
                </div>

                <div
                    className={`flex flex-col gap-3 absolute top-0 right-0 w-full bg-black/90 p-4 transition-all duration-500 ${
                        showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                >
                    <div
                        className="self-end rounded p-1 transition hover:bg-secondary/20"
                        onClick={toggleMenu}
                    >
                        <span>X</span>
                    </div>

                    <Navbar />

                    <div className="w-full flex items-center gap-2">
                        <Button className="w-1/2 box-border bg-linePrimary transition hover:bg-lineDark">
                            {languages[lang].navbar.logOut}
                        </Button>
                        <Button className="w-1/2 box-border bg-linePrimary transition hover:bg-lineDark">
                            {languages[lang].navbar.reset}
                        </Button>
                    </div>
                </div>

                <div className="w-fit flex justify-end cursor-pointer md:hidden" onClick={toggleMenu}>
                    <span className="w-full">🍔</span>
                </div>
            </Container>
        </header>
    );
};
