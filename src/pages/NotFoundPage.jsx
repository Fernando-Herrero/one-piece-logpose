import { useContext } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/backgrounds/background-not-found.jpg";
import logo from "../assets/images/one-piece-logo.png";
import crewImg from "../assets/images/sombrero-first-crew.png";
import { Container } from "../components/Container";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";

export const NotFoundPage = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
            <img
                src={backgroundImg}
                alt="Mar y barco"
                className="absolute inset-0 w-full h-full object-cover animate-wave"
            />

            <div className="flex flex-col items-center gap-2"></div>
            <div className="absolute inset-0 bg-black opacity-65 pointer-events-none"></div>
            <Container className="flex flex-col gap-6">
                <div className="flex flex-col items-center relative text-white">
                    <img src={logo} alt="One Piece logo" />
                    <h1 className="text-5xl md:text-title">404 Page Not Found</h1>
                    <p className="text-lg md:text-2xl">{languages[lang].errorMessage.notFoundMessage}</p>
                </div>

                <div className="flex flex-col items-center gap-4 relative">
                    <div>
                        <img src={crewImg} alt="sombrero de paja crew" />
                    </div>
                    <Link
                        className="text-xl text-secondary underline rounded p-1 bg-white/30 hover:bg-white/50"
                        to="/"
                    >
                        {languages[lang].notFoundPage.inicio}
                    </Link>
                </div>
            </Container>

            <style>
                {`
            @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
            }
            .animate-wave {
            animation: wave 6s ease-in-out infinite;
            }
        `}
            </style>
        </div>
    );
};
