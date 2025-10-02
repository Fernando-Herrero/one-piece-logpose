import { api } from "@/core/http/axios";

export const getUserApi = async (userId) => {
    try {
        console.log("Obteniendo user de la api", userId);
        const response = await api.get(`/users/${userId}`);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener user", error);
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

export const getUsersApi = async () => {
    try {
        console.log("Obteniendo todos los users de la api");
        const response = await api.get("/users");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener todos los users", error);
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

export const getUserFollowersApi = async (userId) => {
    try {
        console.log("Recibiendo followers del user", userId);
        const response = await api.get(`/users/${userId}/followers`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener followers", error);
    }
};

export const getUserFollowingApi = async (userId) => {
    try {
        console.log("Recibiendo followers del user", userId);
        const response = await api.get(`/users/${userId}/following`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener followers", error);
    }
};

export const followUserApi = async (userId) => {
    try {
        console.log("Siguiendo usuario", userId);
        const response = await api.post(`/users/${userId}/follow`);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al seguir user", error);
        throw error;
    }
};

export const unfollowUserApi = async (userId) => {
    try {
        console.log("Dejando de seguir al usuario", userId);
        const response = await api.post(`/users/${userId}/unfollow`);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al dejar de seguir user", error);
        throw error;
    }
};
