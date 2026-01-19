import { useContext } from "react";
import { NotificationsCountContext } from "../context/NotificationsCountContext";
import type { NotificationsCountType } from "../types/notifications.types";

export const useNotificationsCountontext = (): NotificationsCountType => {
    const context = useContext(NotificationsCountContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
