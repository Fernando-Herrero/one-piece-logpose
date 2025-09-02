import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AvatarSelected } from "../../components/AvatarSelected";
import { Container } from "../../components/Container";
import { LoginForm } from "../../components/LoginForm";
import { LanguagesContext } from "../../context/LanguagesContext";
import { languages } from "../../data/languages";

export const LoginPage = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <Container className="flex flex-col gap-1 items-center relativ">
            <header className="flex flex-col items-center text-center gap-1">
                <h1 className="font-family-title text-title text-accent shadow-title">One Piece</h1>
                <h2 className="font-family-title text-subtitle font-bold text-[#c9a066] text-shadow-[4px_4px_2px_#3b2f2f] tracking-wider -mt-8">
                    LogPose
                </h2>
                <p>{languages[lang].login.summary}</p>
            </header>

            <LoginForm />
            <AvatarSelected />
            <Outlet />
        </Container>
    );
};
