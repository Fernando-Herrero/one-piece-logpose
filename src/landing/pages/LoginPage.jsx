import { AvatarSelected } from "@/components/AvatarSelected";
import { LoginForm } from "@/landing/components/features/LoginForm";
import { Container } from "@/landing/components/ui/Container";

export const LoginPage = () => {
    return (
        <Container className="flex flex-col gap-5 items-center pb-auto">
            <LoginForm />
            <AvatarSelected />
        </Container>
    );
};
