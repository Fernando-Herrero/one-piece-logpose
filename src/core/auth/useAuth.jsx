import { AuthContext } from "@/context/AuthContext";
import { local } from "@/helpers/storage";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";
import {
    deleteAccountApi,
    getMyBookmarkedPostsApi,
    getMyCommentedPostsApi,
    getMyLikedPostsApi,
    getMyPostsApi,
    getProfileApi,
    getUserStatsApi,
    loginApi,
    logOutApi,
    registerApi,
    updateProfileApi,
} from "./auth.api";
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
            authData.user.isActive = true;
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
            local.save("theme", false);
            local.remove("lang");
            document.body.classList.remove("dark");
            goTo("/");
        }
    };

    const deleteAccount = async (userId) => {
        console.log("Eliminando usuario");
        const deleteAccountResponse = await deleteAccountApi(userId);

        if (deleteAccountResponse) {
            console.log("logout del hook", deleteAccountResponse);
            removeTokenFromLocalStorage();
            removeUserFromLocalStorage();
            setUser(null);
            local.save("theme", false);
            local.remove("lang");
            document.body.classList.remove("dark");
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

    const getUserStats = async () => {
        try {
            const dataStats = await getUserStatsApi();
            return dataStats;
        } catch (error) {
            console.error("Error al obtener stats del usuario", error);
        }
    };

    const getMyPosts = async () => {
        try {
            const dataPosts = await getMyPostsApi();
            console.log("Esta es la data de mis posts", dataPosts);
            return dataPosts;
        } catch (error) {
            console.error("Error al obtener mis posts", error);
        }
    };

    const getMyLikedPosts = async () => {
        try {
            const dataLikedPosts = await getMyLikedPostsApi();
            console.log("Esta es la data de mis posts", dataLikedPosts);
            return dataLikedPosts;
        } catch (error) {
            console.error("Error al obtener mis liked posts", error);
        }
    };

    const getMyBookmarkedPosts = async () => {
        try {
            const dataBookmarkedPosts = await getMyBookmarkedPostsApi();
            console.log("Esta es la data de mis posts", dataBookmarkedPosts);
            return dataBookmarkedPosts;
        } catch (error) {
            console.error("Error al obtener mis bookmarked posts", error);
        }
    };

    const getMyCommentedPosts = async () => {
        try {
            const dataCommentedPosts = await getMyCommentedPostsApi();
            console.log("Esta es la data de mis posts", dataCommentedPosts);
            return dataCommentedPosts;
        } catch (error) {
            console.error("Error al obtener mis commented posts", error);
        }
    };

    return {
        register,
        login,
        logout,
        getProfile,
        updatedProfile,
        getUserStats,
        getMyPosts,
        getMyLikedPosts,
        getMyBookmarkedPosts,
        getMyCommentedPosts,
        deleteAccount,
    };
};
