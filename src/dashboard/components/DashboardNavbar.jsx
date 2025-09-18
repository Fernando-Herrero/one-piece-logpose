import luffyAvatar from "@/assets/images/avatars/luffy/luffy-happy-400.webp";
import logo from "@/assets/images/one-piece-logo.webp";
import { Container } from "@/landing/components/ui/Container";

export const DashboardNavbar = () => {
    return (
        <header className="w-full py-2 border-b-2 border-primary bg-gradient-primary backdrop-blur-md">
            <Container className="flex items-center w-full">
                <div className="w-16 mx-auto">
                    <img className="w-full" src={logo} alt="One Piece logo" />
                </div>

                <div className="w-6 h-6 rounded-full overflow-hidden self-end">
                    <img src={luffyAvatar} alt="Avatar image" />
                </div>
            </Container>
        </header>
    );
};
