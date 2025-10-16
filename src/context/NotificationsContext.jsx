import { getNotificationsApi } from "@/core/notifications/notifications.api";
import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext(null);

export const NotificationsProvider = ({ children }) => {
    const [notis, setNotis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                setError(null);
                setLoading(true);

                const data = await getNotificationsApi();
                setNotis(data);
            } catch (error) {
                console.error("Error al obtener las notificaciones", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <NotificationContext.Provider value={{ notis, loading, error }}>
            {children}
        </NotificationContext.Provider>
    );
};
