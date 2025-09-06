import { Navigate, Route, Routes } from "react-router-dom";
import { Modal } from "./components/Modal";
import { Overlay } from "./components/Overlay";
import { Footer } from "./layouts/Footer";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm">
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
                    <Route path="/main" element={<MainPage />}>
                        <Route
                            path="reset"
                            element={
                                <Overlay>
                                    <Modal />
                                </Overlay>
                            }
                        />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};
