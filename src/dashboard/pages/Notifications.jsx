import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { NotificationsContext } from "@/context/NotificationsContext";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { NotificationItem } from "@/dashboard/components/notifications/NotificationItem";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext, useState } from "react";

export const Notifications = () => {
    const { notis, loading, error } = useContext(NotificationsContext);
    console.log(notis);
    const { markNotificationRead, markAllNotificationsRead, deleteNotification, deleteAllNotifications } =
        useNotifications();
    const { notisCount } = useContext(NotificationsCountContext);
    const { lang } = useContext(LanguagesContext);
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
            message: languages[lang].modal.deleteAllNotifications,
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
            confirmText: languages[lang].modal.confirmLogOut,
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
                    {languages[lang].notifications.loading}
                    <LoadingDots />
                </p>
            </div>
        );

    if (!notis)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].notifications.noNotis}</p>;

    if (error)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].notifications.error}</p>;

    return (
        <section className="max-w-xl mx-auto p-2 md:p-6">
            <header className="flex justify-between items-center gap-1 flex-wrap mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2 text-primary">
                        {languages[lang].notifications.title}
                    </h1>
                    <p className="text-muted">
                        {languages[lang].notifications.unread}:{" "}
                        <span className="font-semibold">"{notisCount}"</span>
                    </p>
                </div>

                {notis.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        <Button onClick={() => markAllNotificationsRead()}>
                            {languages[lang].notifications.allRead}
                        </Button>
                        <Button variant="danger" onClick={handleDeleteAll} disabled={isDeleting}>
                            {isDeleting
                                ? languages[lang].notifications.deleting
                                : languages[lang].notifications.deleteAll}
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
                            lang={lang}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    ))}
            </div>
        </section>
    );
};
