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

export const getNotificationsCountApi = async () => {
    try {
        console.log("Obteniendo numero de notificaciones");
        const response = await api.get("/notifications/unread-count");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener el numero de notificaciones", error);
    }
};

export const getNotificationsApi = async () => {
    try {
        console.log("Obteniendo notificaciones");
        const response = await api.get("/notifications");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener las notificaciones", error);
    }
};
