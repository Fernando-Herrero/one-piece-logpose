import { AuthContext } from "@/context/AuthContext";
import { getNotificationsCountApi } from "@/core/notifications/notifications.api";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const NotificationsCountContext = createContext(null);

export const NotificationsCountProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const [notisCount, setNotisCount] = useState(0);

    const fetchNotificationsCount = useCallback(async () => {
        if (!userId) return;
        try {
            const data = await getNotificationsCountApi();
            setNotisCount(data.count);
        } catch (error) {
            console.error("Error al obtener el numero de notificaciones", error);
        }
    }, [userId]);

    const decrementCount = useCallback(() => {
        setNotisCount((prev) => Math.max(0, prev - 1));
    }, [setNotisCount]);

    useEffect(() => {
        fetchNotificationsCount();
    }, [fetchNotificationsCount]);

    const value = useMemo(
        () => ({ notisCount, setNotisCount, decrementCount, fetchNotificationsCount }),
        [notisCount, decrementCount, fetchNotificationsCount]
    );

    return <NotificationsCountContext.Provider value={value}>{children}</NotificationsCountContext.Provider>;
};
