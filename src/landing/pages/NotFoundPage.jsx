import backgroundImg1024 from "@/assets/images/backgrounds/not-found-bg/background-not-found-1024.webp";
import backgroundImg400 from "@/assets/images/backgrounds/not-found-bg/background-not-found-400.webp";
import backgroundImg700 from "@/assets/images/backgrounds/not-found-bg/background-not-found-700.webp";
import logo from "@/assets/images/one-piece-logo.webp";
import crewImg from "@/assets/images/sombrero-first-crew.png";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { Container } from "@/landing/components/ui/Container";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    const { lang } = useContext(LanguagesContext);
    const { user } = useContext(AuthContext);

    const redirectPath = user ? "/dashboard" : "/home";

    return (
        <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
            <picture className="fixed inset-0 h-full w-full">
                <source srcSet={backgroundImg1024} media="(min-width: 1024px)" type="image/webp" />
                <source srcSet={backgroundImg700} media="(min-width: 700px)" type="image/webp" />
                <source srcSet={backgroundImg400} media="(min-width: 400px)" type="image/webp" />
                <img
                    src={backgroundImg400}
                    alt="Sunny sailing the sea"
                    className="w-full h-full object-cover object-center animate-wave"
                />
            </picture>

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
                        to={redirectPath}
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
