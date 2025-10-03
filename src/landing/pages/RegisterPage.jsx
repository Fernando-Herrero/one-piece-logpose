import { AvatarSelected } from "@/dashboard/components/AvatarSelected";
import { RegisterForm } from "@/landing/components/features/RegisterForm";
import { Container } from "@/landing/components/ui/Container";

export const RegisterPage = () => {
    return (
        <section className="flex flex-col items-center gap-2 pb-8">
            <Container>
                <RegisterForm />
            </Container>
            <AvatarSelected />
        </section>
    );
};
