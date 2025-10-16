import { getNotificationsCountApi } from "@/core/notifications/notifications.api";
import { createContext, useEffect, useState } from "react";

export const NotificationsCountContext = createContext(null);

export const NotificationsCountProvider = ({ children }) => {
    const [notisCount, setNotisCount] = useState(0);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getNotificationsCountApi();
                setNotisCount(data);
                console.log("El numero de notificaciones que teine este user es", data);
            } catch (error) {
                console.error("Error al obtener el numero de notificaciones", error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <NotificationsCountContext.Provider value={{ notisCount }}>
            {children}
        </NotificationsCountContext.Provider>
    );
};
