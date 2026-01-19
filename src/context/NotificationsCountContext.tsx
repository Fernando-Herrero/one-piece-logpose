import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getNotificationsCountApi } from "../core/notifications/notifications.api";
import { useAuthContext } from "../hooks/useAuthContext";
import type { NotificacionsContextProps, NotificationsCountType } from "../types/notifications.types";

export const NotificationsCountContext = createContext<NotificationsCountType | null>(null);

export const NotificationsCountProvider = ({ children }: NotificacionsContextProps) => {
    const { user } = useAuthContext();
    const userId = user?.id || user?._id;
    const [notisCount, setNotisCount] = useState<number>(0);

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
