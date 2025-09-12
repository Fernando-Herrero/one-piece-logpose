import { api } from "../http/axios";

export const loginApi = async (user) => {
    try {
        console.log("loginApi:", user);
        const response = await api.post("auth/login", user);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión");
        throw error;
    }
};

export const registerApi = async (user) => {
    try {
        console.log("registerApi:", user);
        const response = await api.post("auth/register", user);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al registrar ususario", error);
        throw error;
    }
};
