import { AvatarSelected } from "@/components/features/AvatarSelected";
import { LoginForm } from "@/components/features/LoginForm";
import { Container } from "@/components/ui/Container";

export const LoginPage = () => {
    return (
        <Container className="flex flex-col gap-5 items-center pb-auto">
            <LoginForm />
            <AvatarSelected />
        </Container>
    );
};
