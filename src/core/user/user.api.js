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
