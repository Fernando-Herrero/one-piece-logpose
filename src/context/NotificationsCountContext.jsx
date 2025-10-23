import { AuthContext } from "@/context/AuthContext";
import { getNotificationsCountApi } from "@/core/notifications/notifications.api";
import { createContext, useContext, useEffect, useState } from "react";

export const NotificationsCountContext = createContext(null);

export const NotificationsCountProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const [notisCount, setNotisCount] = useState(0);

    useEffect(() => {
        if (!userId) {
            setNotisCount(0);
            return;
        }
        fetchNotificationsCount();
    }, [userId]);

    const fetchNotificationsCount = async () => {
        try {
            const data = await getNotificationsCountApi();
            setNotisCount(data.count);
        } catch (error) {
            console.error("Error al obtener el numero de notificaciones", error);
        }
    };

    const decrementCount = () => {
        setNotisCount((prev) => Math.max(0, prev - 1));
    };

    return (
        <NotificationsCountContext.Provider
            value={{ notisCount, setNotisCount, decrementCount, fetchNotificationsCount }}
        >
            {children}
        </NotificationsCountContext.Provider>
    );
};
