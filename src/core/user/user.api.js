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

export const followUser = async (userId) => {};
