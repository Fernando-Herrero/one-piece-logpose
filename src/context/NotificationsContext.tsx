import { createContext, useEffect, useMemo, useState } from "react";
import { getNotificationsApi } from "../core/notifications/notifications.api";
import { useAuthContext } from "../hooks/useAuthContext";
import type { NotificacionsContextProps, NotificationsContextType } from "../types/notifications.types";

export const NotificationsContext = createContext<NotificationsContextType | null>(null);

export const NotificationsProvider = ({ children }: NotificacionsContextProps) => {
    const { user } = useAuthContext();
    const userId = user?.id ?? user?._id ?? null; // para que no sea user.id = 0 (seria igual a false)
    const [notis, setNotis] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) {
            setNotis([]);
            setError(null);
            return;
        }

        const fetchNotifications = async () => {
            try {
                setError(null);
                setLoading(true);

                const data = await getNotificationsApi();
                setNotis(Array.isArray(data) ? data : []);
            } catch (err: unknown) {
                console.error("Error al obtener las notificaciones", err);
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, [userId]);

    const value = useMemo(() => ({ notis, setNotis, loading, error }), [notis, setNotis, loading, error]);

    return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
};
