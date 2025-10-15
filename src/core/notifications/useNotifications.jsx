import { notificationApi } from "@/core/notifications/notifications.api";

export const useNotifications = () => {
    const notification = async (newNotification) => {
        try {
            const data = await notificationApi(newNotification);
            console.log("Esta es la data de mi notificacion", data);
            return data;
        } catch (error) {
            console.error("Error al realizar la notificacion", error);
        }
    };

    return {
        notification,
    };
};
