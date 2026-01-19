import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationsContext";
import type { NotificationsContextType } from "../types/notifications.types";

export const useNotificationsContext = (): NotificationsContextType => {
    const context = useContext(NotificationsContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
