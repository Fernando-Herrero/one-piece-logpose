import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.jsx";
import { PageError } from "@/components/ErrorBoundary/PageError.jsx";
import { NotificationsProvider } from "@/context/NotificationsContext.jsx";
import { NotificationsCountProvider } from "@/context/NotificationsCountContext.jsx";
import { PostProvider } from "@/context/PostContext.jsx";
import { UsersProvider } from "@/context/UsersContext.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AvatarProvider } from "./context/AvatarContext.jsx";
import { DeviceProvider } from "./context/DeviceContext.jsx";
import { LanguagesProvider } from "./context/LanguagesContext.jsx";
import { ModdalProvider } from "./context/ModalContext.jsx";
import { SagaProvider } from "./context/SagaContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <ErrorBoundary
        fallback={
            <PageError
                title="Ups… algo no funcionó"
                message="Esto no debería haber pasado…Por favor, recarga la página para continuar."
                onRetry={() => window.location.reload()}
                retryText="Recargar página"
                fullPage
            />
        }
    >
        <BrowserRouter>
            <LanguagesProvider>
                <AuthProvider>
                    <AvatarProvider>
                        <PostProvider>
                            <UsersProvider>
                                <NotificationsCountProvider>
                                    <NotificationsProvider>
                                        <SagaProvider>
                                            <ModdalProvider>
                                                <DeviceProvider>
                                                    <App />
                                                </DeviceProvider>
                                            </ModdalProvider>
                                        </SagaProvider>
                                    </NotificationsProvider>
                                </NotificationsCountProvider>
                            </UsersProvider>
                        </PostProvider>
                    </AvatarProvider>
                </AuthProvider>
            </LanguagesProvider>
        </BrowserRouter>
    </ErrorBoundary>
);
