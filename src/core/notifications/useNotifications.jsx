import { NotificationsContext } from "@/context/NotificationsContext";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import {
    deleteAllNotificationsApi,
    deleteNotificationApi,
    markAllNotificationsReadApi,
    markNotificationReadApi,
    notificationApi,
} from "@/core/notifications/notifications.api";
import { useContext } from "react";

export const useNotifications = () => {
    const { notis, setNotis } = useContext(NotificationsContext); // ✅ Agregar notis
    const { decrementCount, setNotisCount } = useContext(NotificationsCountContext);

    const notification = async (newNotification) => {
        try {
            const data = await notificationApi(newNotification);
            console.log("Notificacion enviada", data);
            return data;
        } catch (error) {
            console.error("Error al realizar la notificacion", error);
            throw error;
        }
    };

    const markNotificationRead = async (notifyId) => {
        try {
            await markNotificationReadApi(notifyId);
            setNotis((prev) => prev.map((noti) => (noti._id === notifyId ? { ...noti, read: true } : noti)));
            decrementCount();
        } catch (error) {
            console.error("Error al marcar la notificacion como leida", error);
            throw error;
        }
    };

    const markAllNotificationsRead = async () => {
        try {
            await markAllNotificationsReadApi();
            setNotis((prev) => prev.map((noti) => ({ ...noti, read: true })));
            setNotisCount(0);
        } catch (error) {
            console.error("Error al marcar todas las notificaciones como leidas", error);
            throw error;
        }
    };

    const deleteNotification = async (notifyId) => {
        try {
            const notiToDelete = notis.find((noti) => noti._id === notifyId);

            await deleteNotificationApi(notifyId);
            setNotis((prev) => prev.filter((noti) => noti._id !== notifyId));

            if (notiToDelete && !notiToDelete.read) {
                decrementCount();
            }
        } catch (error) {
            console.error("Error al eliminar la notificacion", error);
            throw error;
        }
    };

    const deleteAllNotifications = async () => {
        try {
            await deleteAllNotificationsApi();
            setNotis([]);
            setNotisCount(0);
        } catch (error) {
            console.error("Error al eliminar todas las notificaciones", error);
            throw error;
        }
    };

    return {
        notification,
        markNotificationRead,
        markAllNotificationsRead,
        deleteNotification,
        deleteAllNotifications,
    };
};
