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
        <Container className="flex flex-col gap-2 items-center relativ pt-4">
            <header className="flex flex-col items-center text-center gap-1">
                <h1 className="font-family-title text-4xl text-accent shadow-title -mb-3">One Piece</h1>
                <h2 className="font-family-title text-3xl text-[#c9a066] text-shadow-[2px_2px_0px_#3b2f2f] tracking-wider">
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
