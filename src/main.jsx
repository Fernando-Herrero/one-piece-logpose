import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { AvatarProvider } from "./context/AvatarContext.jsx";
import { DeviceProvider } from "./context/DeviceContext.jsx";
import { LanguagesProvider } from "./context/LanguagesContext.jsx";
import { ModdalProvider } from "./context/ModalContext.jsx";
import { SagaProvider } from "./context/SagaContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <LanguagesProvider>
                <SagaProvider>
                    <AvatarProvider>
                        <AuthProvider>
                            <ModdalProvider>
                                <DeviceProvider>
                                    <App />
                                </DeviceProvider>
                            </ModdalProvider>
                        </AuthProvider>
                    </AvatarProvider>
                </SagaProvider>
            </LanguagesProvider>
        </BrowserRouter>
    </StrictMode>
);
