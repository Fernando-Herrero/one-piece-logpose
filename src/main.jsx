import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { AvatarProvider } from "./context/AvatarContext.jsx";
import { LanguagesProvider } from "./context/LanguagesContext.jsx";
import { ModdalProvider } from "./context/ModalContext.jsx";
import { SagaProvider } from "./context/SagaContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <LanguagesProvider>
                <SagaProvider>
                    <AvatarProvider>
                        <UserProvider>
                            <ModdalProvider>
                                <App />
                            </ModdalProvider>
                        </UserProvider>
                    </AvatarProvider>
                </SagaProvider>
            </LanguagesProvider>
        </BrowserRouter>
    </StrictMode>
);
