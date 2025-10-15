import { api } from "@/core/http/axios";

export const notificationApi = async (newNotification) => {
    try {
        console.log("Notificando una accion", newNotification);
        const response = await api.post("/notifications", newNotification);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al enviar una notificacion", error);
    }
};
