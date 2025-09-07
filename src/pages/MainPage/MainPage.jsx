import { Outlet, useLocation } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const MainPage = () => {
    const location = useLocation();
    const shouldShowMoal = location.state?.showWelcomeModal;

    return (
        <>
            <Header />
            <Container className="h-full">
                <h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure magni esse, ut
                    beatae assumenda officiis, inventore suscipit adipisci nisi architecto. Enim tempore
                    adipisci asperiores dolor. Cumque laudantium molestias suscipit.
                </h1>
                <Outlet />
            </Container>
        </>
    );
};
