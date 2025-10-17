import cross from "@/assets/icons/cross-close.svg";
import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { NotificationsContext } from "@/context/NotificationsContext";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext, useState } from "react";

export const Notifications = () => {
    const { notis, loading, error } = useContext(NotificationsContext);
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
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
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
            </header>

            <div className="flex flex-col gap-4">
                {[...notis]
                    ?.sort((a, b) => a.read - b.read)
                    .map((noti) => (
                        <div
                            key={noti._id}
                            className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition-transform hover:-translate-0.5 relative ${
                                noti.read ? "bg-sunny" : "bg-secondary border-l-4 border-sunny"
                            }`}
                        >
                            <div className="flex-1">
                                <p className="text-sm text-primary">
                                    <strong>{noti.from.displayName || noti.from.username}</strong>{" "}
                                    {noti.type === "like" && languages[lang].notifications.liked}
                                    {noti.type === "follow" && languages[lang].notifications.followed}
                                    {noti.type === "bookmark" && languages[lang].notifications.bookmarked}
                                    {noti.type === "comment" && languages[lang].notifications.comment}
                                </p>
                                {noti.postId && (
                                    <p className="text-xs text-muted mt-1 italic">
                                        "{noti.postId.text?.slice(0, 80)}
                                        {noti.postId.text?.length > 80 ? "..." : ""}"
                                    </p>
                                )}
                                <span className="text-xs text-muted">
                                    {new Date(noti.createdAt).toLocaleString()}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                {!noti.read && (
                                    <div className="relative group">
                                        <input
                                            type="checkbox"
                                            checked={noti.read}
                                            onChange={() => handleCheck(noti._id)}
                                            disabled={noti.read}
                                            className="cursor-pointer"
                                            aria-label="Marcar como leído"
                                        />
                                        <span className="absolute -bottom-6 right-0 bg-sunny text-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            {languages[lang].notifications.markAsRead}
                                        </span>
                                    </div>
                                )}

                                <button
                                    onClick={() => handleDelete(noti._id)}
                                    className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-linePrimary transition hover:bg-lineDark"
                                    aria-label="Eliminar notificación"
                                >
                                    <img className="w-2 h-2" src={cross} alt="Eliminar" />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};
