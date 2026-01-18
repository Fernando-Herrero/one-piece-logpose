import type { AxiosError } from "axios";
import { api } from "../http/axios";
import type {
    AuthResponse,
    DeleteResponse,
    LogoutResponse,
    PostsResponse,
    StatsResponse,
    User,
} from "./../../types/auth.types";

export const registerApi = async (user: User): Promise<AuthResponse> => {
    try {
        console.log("registerApi:", user);
        const response = await api.post<AuthResponse>("/auth/register", user);
        console.log("respuesta de la api", response);

        return response.data;
        // } catch (error: unknown) {
        //     let backendMessage = "Something went wrong";

        //     if (typeof error === "object" && error !== null && "response" in error) {
        //         // TS ahora sabe que error tiene la propiedad response
        //         // @ts-ignore temporalmente si quieres ignorar pequeños warnings
        //         backendMessage = (error as any).response?.data?.error || backendMessage;
        //     }

        //     throw new Error(backendMessage);
        // }
    } catch (error: unknown) {
        const err = error as AxiosError<{ error: string }>;
        const backendMessage = err.response?.data?.error || "Something went wrong";
        throw new Error(backendMessage);
    }
};

export const loginApi = async (user: User): Promise<AuthResponse> => {
    try {
        console.log("loginApi:", user);
        const response = await api.post<AuthResponse>("/auth/login", user);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError<{ error: string }>;
        const backendMessage = err.response?.data?.error || "Something went wrong";
        throw new Error(backendMessage);
    }
};

export const logOutApi = async (user: User): Promise<LogoutResponse> => {
    try {
        console.log("logoutApi:", user);
        const response = await api.post<LogoutResponse>("/auth/logout");
        console.log("Respuesta de la api la logout:", response);

        return response.data;
    } catch (error) {
        console.error("Error al cerrar sesión", error);
        throw error;
    }
};

export const deleteAccountApi = async (userId: Partial<User>): Promise<DeleteResponse> => {
    try {
        console.log("Eliminando usuario", userId);
        const response = await api.delete<DeleteResponse>(`/users/${userId}`);
        console.log("Respuesta de la api al eliminar usuario:", response);

        return response.data;
    } catch (error) {
        console.error("Error al eliminar usuario", error);
        throw error;
    }
};

export const getProfileApi = async (): Promise<User> => {
    try {
        console.log("getProfileApi");
        const response = await api.get<{ user: User }>("/auth/me");

        return response.data.user;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw error;
    }
};

export const updateProfileApi = async (user: User, updateFields: Partial<User>) => {
    try {
        console.log("updateProfileApi");
        const response = await api.patch<User>(`/users/${user.id || user._id}`, updateFields);
        console.log("Respuesta de la api:", response);

        return response.data;
    } catch (error) {
        console.error("Error al actualizar el perfil", error);
        throw error;
    }
};

export const getUserStatsApi = async (): Promise<StatsResponse> => {
    try {
        console.log("Obteniendo stats del user");
        const response = await api.get<StatsResponse>("/users/me/stats");
        (console.log("Respuesta de la api"), response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener user", error);
        throw error;
    }
};

export const getMyPostsApi = async (): Promise<PostsResponse> => {
    try {
        console.log("Obteniendo mis posts");
        const response = await api.get<PostsResponse>("/users/me/my-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis posts", error);
        throw error;
    }
};

export const getMyLikedPostsApi = async (): Promise<PostsResponse> => {
    try {
        console.log("Obteniendo mis likes de posts");
        const response = await api.get<PostsResponse>("/users/me/liked-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis likes posts", error);
        throw error;
    }
};

export const getMyBookmarkedPostsApi = async (): Promise<PostsResponse> => {
    try {
        console.log("Obteniendo mis favoritos posts");
        const response = await api.get<PostsResponse>("/users/me/bookmarked-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis favoritos posts", error);
        throw error;
    }
};

export const getMyCommentedPostsApi = async (): Promise<PostsResponse> => {
    try {
        console.log("Obteniendo mis comentarios posts");
        const response = await api.get<PostsResponse>("/users/me/commented-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis comentarios posts", error);
        throw error;
    }
};
