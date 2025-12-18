import { Button } from "@/components/Button";
import { ModalContext } from "@/context/ModalContext";
import { NotificationsContext } from "@/context/NotificationsContext";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { NotificationItem } from "@/dashboard/components/notifications/NotificationItem";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useState } from "react";

const Notifications = () => {
    const { notis, loading, error } = useContext(NotificationsContext);
    const { markNotificationRead, markAllNotificationsRead, deleteNotification, deleteAllNotifications } =
        useNotifications();
    const { notisCount } = useContext(NotificationsCountContext);
    const { t } = useTranslate();
    const [isDeleting, setIsDeleting] = useState(false);
    const { showModal, hideModal } = useContext(ModalContext);

    const handleCheck = async (notifyId) => {
        try {
            await markNotificationRead(notifyId);
        } catch (error) {
            console.error("Error al marcar como leído", error);
        }
    };

    const handleDeleteAll = async () => {
        showModal({
            message: t("modal.delete_all_notifications"),
            onConfirm: async () => {
                setIsDeleting(true);
                try {
                    await deleteAllNotifications();
                    hideModal();
                } catch (error) {
                    console.error("Error al eliminar todas", error);
                } finally {
                    setIsDeleting(false);
                }
            },
            onCancel: hideModal,
            confirmText: t("modal.confirm_logout"),
        });
    };

    const handleDelete = async (notifyId) => {
        try {
            await deleteNotification(notifyId);
        } catch (error) {
            console.error("Error al eliminar notificación", error);
        }
    };

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center max-h-screen gap-1">
                <Spinner />{" "}
                <p className="text-gradient dark:text-black">
                    {t("notifications.loading")}
                    <LoadingDots />
                </p>
            </div>
        );

    if (!notis) return <p className="text-linePrimary text-center pt-10">{t("notifications.no_notis")}</p>;

    if (error) return <p className="text-linePrimary text-center pt-10">{t("notifications.error")}</p>;

    return (
        <section className="max-w-xl mx-auto p-2 md:p-6">
            <header className="flex justify-between items-center gap-1 flex-wrap mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2 text-primary">{t("notifications.title")}</h1>
                    <p className="text-muted">
                        {t("notifications.unread")}: <span className="font-semibold">"{notisCount}"</span>
                    </p>
                </div>

                {notis.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        <Button onClick={() => markAllNotificationsRead()}>
                            {t("notifications.all_read")}
                        </Button>
                        <Button variant="danger" onClick={handleDeleteAll} disabled={isDeleting}>
                            {isDeleting ? t("notifications.deleting") : t("notifications.delete_all")}
                        </Button>
                    </div>
                )}
            </header>

            <div className="flex flex-col gap-4">
                {[...notis]
                    ?.filter((noti) => noti.from)
                    ?.sort((a, b) => a.read - b.read)
                    .map((noti) => (
                        <NotificationItem
                            key={noti._id}
                            noti={noti}
                            t={t}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Notifications;
