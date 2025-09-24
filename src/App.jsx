import { LoginPage } from "@//landing/pages/LoginPage.jsx";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { AuthContext } from "@/context/AuthContext";
import { ModalContext } from "@/context/ModalContext.jsx";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { Footer } from "@/landing/components/features/Footer";
import { MapSection } from "@/landing/components/features/MapSection";
import { PrivateRoute } from "@/landing/components/features/PrivateRoute";
import { Header } from "@/landing/layouts/Header";
import { CharactersPage } from "@/landing/pages/CharactersPage";
import { ContactPage } from "@/landing/pages/ContactPage";
import { FaqHelpPage } from "@/landing/pages/FaqHelpPage";
import { HistoryPage } from "@/landing/pages/HistoryPage";
import { HomePage } from "@/landing/pages/HomePage.jsx";
import { NotFoundPage } from "@/landing/pages/NotFoundPage.jsx";
import { RegisterPage } from "@/landing/pages/RegisterPage";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;
    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <div className="min-h-screen">
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={user ? <Navigate to="/dashboard" replace /> : <HomePage />}
                        />
                        <Route element={<PrivateRoute />}>
                            <Route path="/dashboard/*" element={<Dashboard />} />
                            {/* <Route path="/main" element={<MainPage />} /> */}
                        </Route>

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                {isOpen && (
                    <Overlay>{(handleClose) => <Modal {...modalData} onCancel={handleClose} />}</Overlay>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen grid grid-rows-[1fr_auto] font-family-body text-sm overflow-x-hidden overflow-y-hidden">
            <Header />

            <main className="flex flex-col justify-center pt-24">
                <Routes>
                    <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <HomePage />} />

                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="/login"
                        element={
                            <Overlay>
                                <LoginPage />
                            </Overlay>
                        }
                    />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/faq" element={<FaqHelpPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/characters" element={<CharactersPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route
                        path="/map"
                        element={
                            <Overlay>
                                <MapSection />
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
