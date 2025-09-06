import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./layouts/Footer";
import { MainPage } from "./pages/MainPage/MainPage";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    {/* <Route path="/login" element={<LoginPage />}>
                        <Route
                            path="register"
                            element={
                                <Overlay>
                                    <RegisterForm />
                                </Overlay>
                            }
                        />
                    </Route> */}
                    <Route path="/main" element={<MainPage />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
};
