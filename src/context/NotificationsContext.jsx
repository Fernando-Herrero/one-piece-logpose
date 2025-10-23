import { AuthContext } from "@/context/AuthContext";
import { getNotificationsApi } from "@/core/notifications/notifications.api";
import { createContext, useContext, useEffect, useState } from "react";

export const NotificationsContext = createContext(null);

export const NotificationsProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const [notis, setNotis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
            } catch (error) {
                console.error("Error al obtener las notificaciones", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <NotificationsContext.Provider value={{ notis, setNotis, loading, error }}>
            {children}
        </NotificationsContext.Provider>
    );
};
