import { PrivateRoute } from "@/components/features/PrivateRoute.jsx";
import { Modal } from "@/components/ui/Modal.jsx";
import { Overlay } from "@/components/ui/Overlay.jsx";
import { ModalContext } from "@/context/ModalContext.jsx";
import { Footer } from "@/layouts/Footer.jsx";
import { Header } from "@/layouts/Header.jsx";
import { HomePage } from "@/pages/HomePage.jsx";
import { LoginPage } from "@/pages/LoginPage.jsx";
import { MainPage } from "@/pages/MainPage.jsx";
import { NotFoundPage } from "@/pages/NotFoundPage.jsx";
import { RegisterForm } from "@/pages/RegisterForm.jsx";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;

    return (
        <div className="min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm overflow-x-hidden overflow-y-hidden">
            <Header />

            <main className="flex flex-col justify-center">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />

                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterForm />} />

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
