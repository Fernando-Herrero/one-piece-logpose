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

export const getProfileApi = async () => {
    try {
        console.log("getProfileApi");
        const response = await api.get("auth/me");
        console.log("Respuesta de la api:", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw error;
    }
};

export const updateProfileApi = async (user, updateFields) => {
    try {
        console.log("updateProfileApi");
        const response = await api.patch(`/users/${user.id}`, updateFields);
        console.log("Respuesta de la api:", response);

        return response.data;
    } catch (error) {
        console.error("Error al actualizar el perfil", error);
        throw error;
    }
};
