import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/features/PrivateRoute.jsx";
import { Modal } from "./components/ui/Modal.jsx";
import { Overlay } from "./components/ui/Overlay.jsx";
import { ModalContext } from "./context/ModalContext.jsx";
import { Footer } from "./layouts/Footer";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterForm } from "./pages/LoginPage/RegisterForm/RegisterForm";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;

    return (
        <div className="h-dvh min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm">
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginPage />}>
                        <Route
                            path="register"
                            element={
                                <Overlay>
                                    <RegisterForm />
                                </Overlay>
                            }
                        />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/main" element={<MainPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />

            {isOpen && (
                <Overlay>
                    <Modal {...modalData} />
                </Overlay>
            )}
        </div>
    );
};
