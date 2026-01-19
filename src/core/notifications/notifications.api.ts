import type {
    AllNotificationsRead,
    CreateNotificationData,
    DeleteAllNotifications,
    DeletedNotification,
    Notification,
    NotificationCount,
} from "../../types/notifications.types";
import { api } from "../http/axios";

export const notificationApi = async (newNotification: CreateNotificationData): Promise<Notification> => {
    try {
        console.log("Notificando una accion", newNotification);
        const response = await api.post<Notification>("/notifications", newNotification);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al enviar una notificacion", error);
        throw error;
    }
};

export const getNotificationsCountApi = async (): Promise<NotificationCount> => {
    try {
        console.log("Obteniendo numero de notificaciones");
        const response = await api.get<NotificationCount>("/notifications/unread-count");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener el numero de notificaciones", error);
        throw error;
    }
};

export const getNotificationsApi = async (): Promise<Notification> => {
    try {
        console.log("Obteniendo notificaciones");
        const response = await api.get<Notification>("/notifications");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al obtener las notificaciones", error);
        throw error;
    }
};

export const markNotificationReadApi = async (notifyId: string): Promise<Notification> => {
    try {
        console.log("Marcando notificacion como leida con id", notifyId);
        const response = await api.put<Notification>(`/notifications/${notifyId}/read`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al marcar la notificacion como leida", error);
        throw error;
    }
};

export const markAllNotificationsReadApi = async (): Promise<AllNotificationsRead> => {
    try {
        console.log("Marcando notificaciones como leidas");
        const response = await api.put<AllNotificationsRead>("/notifications/mark-all-read");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al marcar todas las notificaciones como leidas", error);
        throw error;
    }
};

export const deleteNotificationApi = async (notifyId: string): Promise<DeletedNotification> => {
    try {
        console.log("Eliminando notificacion con id", notifyId);
        const response = await api.delete<DeletedNotification>(`/notifications/${notifyId}`);
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al eliminar la notificacion", error);
        throw error;
    }
};

export const deleteAllNotificationsApi = async (): Promise<DeleteAllNotifications> => {
    try {
        console.log("Eliminando todas las notificaciones");
        const response = await api.delete<DeleteAllNotifications>("/notifications");
        console.log("Respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al elimianr todas las notificaciones", error);
        throw error;
    }
};
