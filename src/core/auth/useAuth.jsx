import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { getProfileApi, loginApi, logOutApi, registerApi, updateProfileApi } from "./auth.api";
import {
    removeTokenFromLocalStorage,
    removeUserFromLocalStorage,
    saveTokenInLocalStorage,
    saveUserInLocalStorage,
} from "./auth.service";

export const useAuth = () => {
    const { setUser } = useContext(AuthContext);
    const { goTo } = useGoTo();

    const register = async (user) => {
        console.log("Registrando usuario", user);

        try {
            const authData = await registerApi(user);

            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        } catch (error) {
            console.error("Register error", error.message);
            throw error;
        }
    };

    const login = async (user) => {
        console.log("Iniciando sesión:", user);

        try {
            const authData = await loginApi(user);

            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        } catch (error) {
            console.error("Login error", error.message);
            throw error;
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

    const getProfile = async () => {
        console.log("Obteniendo perfil del usuario actual");

        const { user } = await getProfileApi();

        if (user) {
            console.log("La api dice que hay usuario", user);
        } else {
            console.log("No hay usuario");
        }
    };

    const updatedProfile = async (user, updatedFields) => {
        console.log("updateProfileApi - user:", user);
        console.log("updateProfileApi - updateFields:", updatedFields);

        try {
            console.log("Actualizando el perfil del usuario...");
            const updatedUser = await updateProfileApi(user, updatedFields);
            setUser(updatedUser);
            saveUserInLocalStorage(updatedUser);
            console.log("Perfil actualizado", updatedUser);
        } catch (error) {
            console.error("Error al actualizar perfil", error);
        }
    };

    return { register, login, logout, getProfile, updatedProfile };
};
