import { api } from "../http/axios";

export const registerApi = async (user) => {
    try {
        console.log("registerApi:", user);
        const response = await api.post("auth/register", user);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        const backendMessage = error?.response?.data?.error || "Something went wrong";
        console.error("Error en el registro:", backendMessage);
        throw new Error(backendMessage);
    }
};

export const loginApi = async (user) => {
    try {
        console.log("loginApi:", user);
        const response = await api.post("auth/login", user);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        const backendMessage = error?.response?.data?.error || "Something went wrong";
        console.error("Error al iniciar sesión:", backendMessage);
        throw new Error(backendMessage);
    }
};

export const logOutApi = async (user) => {
    try {
        console.log("logoutApi:", user);
        const response = await api.post("/auth/logout");
        console.log("Respuesta de la api la logout:", response);

        return response.data;
    } catch (error) {
        console.error("Error al cerrar sesión", error);
        throw error;
    }
};

export const deleteAccountApi = async (userId) => {
    try {
        console.log("Eliminando usuario", user);
        const response = await api.post(`/users/${userId}`);
        console.log("Respuesta de la api al eliminar usuario:", response);

        return response.data;
    } catch (error) {
        console.error("Error al eliminar usuario", error);
        throw error;
    }
};

export const getProfileApi = async () => {
    try {
        console.log("getProfileApi");
        const response = await api.get("auth/me");

        return response.data.user;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw error;
    }
};

export const updateProfileApi = async (user, updateFields) => {
    try {
        console.log("updateProfileApi");
        const response = await api.patch(`/users/${user.id || user._id}`, updateFields);
        console.log("Respuesta de la api:", response);

        return response.data;
    } catch (error) {
        console.error("Error al actualizar el perfil", error);
        throw error;
    }
};

export const getUserStatsApi = async () => {
    try {
        console.log("Obteniendo stats del user");
        const response = await api.get("users/me/stats");
        console.log("Respuesta de la api"), response;

        return response.data;
    } catch (error) {
        console.error("Error al obtener user", error);
        throw error;
    }
};

export const getMyPostsApi = async () => {
    try {
        console.log("Obteniendo mis posts");
        const response = await api.get("users/me/my-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis posts", error);
    }
};

export const getMyLikedPostsApi = async () => {
    try {
        console.log("Obteniendo mis likes de posts");
        const response = await api.get("users/me/liked-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis likes posts", error);
    }
};

export const getMyBookmarkedPostsApi = async () => {
    try {
        console.log("Obteniendo mis favoritos posts");
        const response = await api.get("users/me/bookmarked-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis favoritos posts", error);
    }
};

export const getMyCommentedPostsApi = async () => {
    try {
        console.log("Obteniendo mis comentarios posts");
        const response = await api.get("users/me/commented-posts");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener mis comentarios posts", error);
    }
};
