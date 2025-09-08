import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AvatarSelected } from "../../components/features/AvatarSelected";
import { LoginForm } from "../../components/features/LoginForm";
import { AnimationTitle } from "../../components/ui/AnimationTitle";
import { Container } from "../../components/ui/Container";
import { LanguagesContext } from "../../context/LanguagesContext";
import { languages } from "../../data/languages";

export const LoginPage = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <Container className="flex flex-col gap-5 items-center relativ">
            <header className="flex flex-col items-center text-center gap-1 max-w-lg">
                {/* <h1 className="font-family-title text-title text-accent shadow-title">One Piece</h1> */}
                <AnimationTitle
                    text="One Piece"
                    time={600000}
                    time2={5000}
                    className="font-family-title text-title text-accent shadow-title"
                />
                {/* <h2 className="font-family-title text-subtitle font-bold text-[#c9a066] text-shadow-[4px_4px_2px_#3b2f2f] tracking-wider -mt-8">
                    LogPose
                </h2> */}
                <AnimationTitle
                    text="LogPose"
                    time={600001}
                    time2={5001}
                    className="font-family-title text-subtitle font-bold text-[#c9a066] text-shadow-[4px_4px_2px_#3b2f2f] tracking-wider -mt-8"
                />
                <p>{languages[lang].login.summary}</p>
            </header>

            <LoginForm />
            <AvatarSelected />
            <Outlet />
        </Container>
    );
};
