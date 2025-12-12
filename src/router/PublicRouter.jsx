import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { PageError } from "@/components/ErrorBoundary/PageError";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { PageSpinner } from "@/components/PageSpinner";
import { languages } from "@/helpers/languages";
import { Footer } from "@/landing/components/features/Footer";
import { Header } from "@/landing/layouts/Header";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/landing/pages/HomePage"));
const LoginPage = lazy(() => import("@/landing/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/landing/pages/RegisterPage"));
const ContactPage = lazy(() => import("@/landing/pages/ContactPage"));
const CharactersPage = lazy(() => import("@/landing/pages/CharactersPage"));
const HistoryPage = lazy(() => import("@/landing/pages/HistoryPage"));
const NotFoundPage = lazy(() => import("@/landing/pages/NotFoundPage"));
const FaqHelpPage = lazy(() => import("@/landing/pages/FaqHelpPage"));
const MapSection = lazy(() => import("@/landing/components/features/MapSection"));

export const PublicRouter = ({ isOpen, modalData, lang }) => {
    console.log("Render PublicRouter");

    return (
        <div className="min-h-dvh grid grid-rows-[1fr_auto] font-family-body text-sm overflow-x-hidden overflow-y-auto">
            <Header />
            <main className="flex flex-col justify-center pt-24">
                <ErrorBoundary
                    fallback={
                        <PageError
                            title="Oops! Algo salió mal"
                            message="Ha ocurrido un error en la sección pública. Recarga la página o inténtalo más tarde."
                            onRetry={() => window.location.reload()}
                            fullPage
                        />
                    }
                >
                    <Suspense
                        fallback={<PageSpinner message={languages[lang].profile.loading} fullPage showDots />}
                    >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
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

                            <Route path="/dashboard/*" element={<Navigate to="/" replace />} />

                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </main>
            <Footer />
            {isOpen && (
                <Overlay>
                    <Modal {...modalData} />
                </Overlay>
            )}
            )
        </div>
    );
};
