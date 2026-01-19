import { useCallback } from "react";
import { local } from "../../helpers/storage";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAvatar } from "../../hooks/useAvatar";
import { useGoTo } from "../../hooks/useGoTo";
import { useNotificationsCountontext } from "../../hooks/useNotificationCountContext";
import { useNotificationsContext } from "../../hooks/useNotificationsContext";
import type { LoginPayload, RegisterPayload, User } from "../../types/auth.types";
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
    const { setUser } = useAuthContext();
    const { goTo } = useGoTo();
    const { setNotis } = useNotificationsContext();
    const { setNotisCount } = useNotificationsCountontext();
    const { setSelectedAvatar } = useAvatar();

    const register = useCallback(async (user: RegisterPayload) => {
        console.log("Registrando usuario", user);

        try {
            const authData = await registerApi(user);

            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Register error", message);
            throw new Error(message);
        }
    }, []);

    const login = useCallback(async (user: LoginPayload) => {
        console.log("Iniciando sesión:", user);

        try {
            const authData = await loginApi(user);

            saveTokenInLocalStorage(authData.token);
            authData.user.isActive = true;
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("No se pudo hacer login", message);
            throw new Error(message);
        }
    }, []);

    const logout = useCallback(async () => {
        console.log("Cerrando sesión");
        const logoutResponse = await logOutApi();

        if (logoutResponse?.logout) {
            removeTokenFromLocalStorage();
            removeUserFromLocalStorage();
            setUser(null);
            local.save("theme", false);
            local.remove("lang");
            document.body.classList.remove("dark");
            local.remove("avatarSelected");
            setSelectedAvatar(null);
            setNotis([]);
            setNotisCount(0);
            // goTo("/");
        }
    }, []);

    const deleteAccount = useCallback(async (userId: string) => {
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
            local.remove("avatarSelected");
            setSelectedAvatar(null);
            setNotis([]);
            setNotisCount(0);
            goTo("/");
        }
    }, []);

    const getProfile = useCallback(async () => {
        console.log("Obteniendo perfil del usuario actual");

        const user = await getProfileApi();

        if (user) {
            console.log("La api dice que hay usuario", user);
        } else {
            console.log("No hay usuario");
        }
    }, []);

    const updatedProfile = useCallback(async (user: User, updatedFields: Partial<User>) => {
        console.log("updateProfileApi - user:", user);
        console.log("updateProfileApi - updateFields:", updatedFields);

        try {
            console.log("Actualizando el perfil del usuario...");
            const updatedUser = await updateProfileApi(user, updatedFields);
            setUser(updatedUser);
            saveUserInLocalStorage(updatedUser);
            console.log("Perfil actualizado", updatedUser);
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("No se pudo actualizar el user", message);
            throw new Error(message);
        }
    }, []);

    const getUserStats = useCallback(async () => {
        try {
            const dataStats = await getUserStatsApi();
            return dataStats;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Error al obtener stats del usuario", message);
            return undefined;
        }
    }, []);

    const getMyPosts = useCallback(async () => {
        try {
            const dataPosts = await getMyPostsApi();
            console.log("Esta es la data de mis posts", dataPosts);
            return dataPosts;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Error al obtener mis posts", message);
            return undefined;
        }
    }, []);

    const getMyLikedPosts = useCallback(async () => {
        try {
            const dataLikedPosts = await getMyLikedPostsApi();
            console.log("Esta es la data de mis posts", dataLikedPosts);
            return dataLikedPosts;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Error al obtener mis liked posts", message);
            return undefined;
        }
    }, []);

    const getMyBookmarkedPosts = useCallback(async () => {
        try {
            const dataBookmarkedPosts = await getMyBookmarkedPostsApi();
            console.log("Esta es la data de mis posts", dataBookmarkedPosts);
            return dataBookmarkedPosts;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Error al obtener mis bookmarked posts", message);
            return undefined;
        }
    }, []);

    const getMyCommentedPosts = useCallback(async () => {
        try {
            const dataCommentedPosts = await getMyCommentedPostsApi();
            console.log("Esta es la data de mis posts", dataCommentedPosts);
            return dataCommentedPosts;
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Error al obtener mis commented posts", message);
            return undefined;
        }
    }, []);

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
