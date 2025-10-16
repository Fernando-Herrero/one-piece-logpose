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
    <BrowserRouter>
        <LanguagesProvider>
            <AuthProvider>
                <PostProvider>
                    <UsersProvider>
                        <NotificationsCountProvider>
                            <SagaProvider>
                                <AvatarProvider>
                                    <ModdalProvider>
                                        <DeviceProvider>
                                            <App />
                                        </DeviceProvider>
                                    </ModdalProvider>
                                </AvatarProvider>
                            </SagaProvider>
                        </NotificationsCountProvider>
                    </UsersProvider>
                </PostProvider>
            </AuthProvider>
        </LanguagesProvider>
    </BrowserRouter>
);
