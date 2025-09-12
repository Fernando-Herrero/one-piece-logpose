import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AvatarSelected } from "../../components/features/AvatarSelected";
import { LoginForm } from "../../components/features/LoginForm";
import { Container } from "../../components/ui/Container";
import { LanguagesContext } from "../../context/LanguagesContext";

export const LoginPage = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <Container className="flex flex-col gap-5 items-center relativ">
            <LoginForm />
            <AvatarSelected />
            <Outlet />
        </Container>
    );
};
