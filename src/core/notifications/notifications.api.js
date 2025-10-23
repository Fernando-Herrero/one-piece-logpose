import { api } from "@/core/http/axios";

export const notificationApi = async (newNotification) => {
    try {
        console.log("Notificando una accion", newNotification);
        const response = await api.post("/notifications", newNotification);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al enviar una notificacion", error);
        throw error;
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
        throw error;
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
        throw error;
    }
};

export const markNotificationReadApi = async (notifyId) => {
    try {
        console.log("Marcando notificacion como leida con id", notifyId);
        const response = await api.put(`/notifications/${notifyId}/read`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al marcar la notificacion como leida", error);
        throw error;
    }
};

export const markAllNotificationsReadApi = async () => {
    try {
        console.log("Marcando notificaciones como leidas");
        const response = await api.put("/notifications/mark-all-read");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al marcar todas las notificaciones como leidas", error);
        throw error;
    }
};

export const deleteNotificationApi = async (notifyId) => {
    try {
        console.log("Eliminando notificacion con id", notifyId);
        const response = await api.delete(`/notifications/${notifyId}`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al eliminar la notificacion", error);
        throw error;
    }
};

export const deleteAllNotificationsApi = async () => {
    try {
        console.log("Eliminando todas las notificaciones");
        const response = await api.delete("/notifications");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al elimianr todas las notificaciones", error);
        throw error;
    }
};
