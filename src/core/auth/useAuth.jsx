import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { loginApi, logOutApi, registerApi } from "./auth.api";
import {
    removeTokenFromLocalStorage,
    removeUserFromLocalStorage,
    saveTokenInLocalStorage,
    saveUserInLocalStorage,
} from "./auth.service";

export const useAuth = () => {
    const { setUser } = useContext(AuthContext);
    const { goTo } = useGoTo();

    const login = async (user) => {
        console.log("Iniciando sesión:", user);

        const authData = await loginApi(user);

        if (authData) {
            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        }
    };

    const register = async (user) => {
        console.log("Registrando usuario", user);

        const authData = await registerApi(user);

        if (authData) {
            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            goTo("/");
        }
    };

    const logout = async () => {
        console.log("Cerrando sesión");
        const logoutResponse = await logOutApi();

        if (logoutResponse?.logout) {
            console.log("logout del hook", logoutResponse);
            removeTokenFromLocalStorage();
            removeUserFromLocalStorage();
            setUser(null);
            goTo("/");
        }
    };

    return { register, login, logout };
};
