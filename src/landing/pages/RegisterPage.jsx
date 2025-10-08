import { AvatarSelected } from "@/components/AvatarSelected";
import { RegisterForm } from "@/landing/components/features/RegisterForm";
import { Container } from "@/landing/components/ui/Container";

export const RegisterPage = () => {
    return (
        <section className="flex flex-col items-center gap-4 pb-8">
            <Container>
                <RegisterForm />
            </Container>
            <AvatarSelected />
        </section>
    );
};
