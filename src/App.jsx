import { LoginPage } from "@//landing/pages/LoginPage.jsx";
import { AuthContext } from "@/context/AuthContext";
import { ModalContext } from "@/context/ModalContext.jsx";
import { Modal } from "@/landing/components/ui/Modal.jsx";
import { Overlay } from "@/landing/components/ui/Overlay.jsx";
import { Footer } from "@/landing/layouts/Footer";
import { Header } from "@/landing/layouts/Header";
import { CharactersPage } from "@/landing/pages/Characters";
import { ContactPage } from "@/landing/pages/ContactPage";
import { FaqHelpPage } from "@/landing/pages/FaqHelpPage";
import { HistoryPage } from "@/landing/pages/HistoryPage";
import { HomePage } from "@/landing/pages/HomePage.jsx";
import { MapPage } from "@/landing/pages/map";
import { NotFoundPage } from "@/landing/pages/NotFoundPage.jsx";
import { RegisterForm } from "@/landing/pages/RegisterForm.jsx";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;
    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <div>
                <main>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/main" element={<MainPage />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm overflow-x-hidden overflow-y-hidden">
            <Header />

            <main className="flex flex-col justify-center pt-25">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />

                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/register"
                        element={
                            <Overlay>
                                <RegisterForm />{" "}
                            </Overlay>
                        }
                    />
                    <Route path="/faq" element={<FaqHelpPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/characters" element={<CharactersPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route
                        path="/map"
                        element={
                            <Overlay>
                                <MapPage />
                            </Overlay>
                        }
                    />

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
