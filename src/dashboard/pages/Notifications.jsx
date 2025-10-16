import { LanguagesContext } from "@/context/LanguagesContext";
import { NotificationContext } from "@/context/NotificationsContext";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext } from "react";

export const Notifications = () => {
    const { notis, loading, error } = useContext(NotificationContext);
    console.log("Las notis son", notis);
    const { notisCount } = useContext(NotificationsCountContext);
    const { lang } = useContext(LanguagesContext);

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
            <h1 className="text-2xl font-bold mb-2 text-primary">{languages[lang].notifications.title}</h1>
            <p className="text-muted mb-6">
                {languages[lang].notifications.unread}:{" "}
                <span className="font-semibold">"{notisCount.count}"</span>
            </p>

            <div className="flex flex-col gap-4">
                {notis?.map((noti) => (
                    <div
                        key={noti._id}
                        className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${
                            noti.read ? "bg-sunny" : "bg-secondary border-l-4 border-sunny"
                        }`}
                    >
                        <div>
                            <p className="text-sm text-primary">
                                <strong>{noti.from.displayName || noti.from.username}</strong>{" "}
                                {noti.type === "like" && languages[lang].notifications.liked}
                                {noti.type === "follow" && languages[lang].notifications.followed}
                                {noti.type === "bookmark" && languages[lang].notifications.bookmarked}
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

                        {!noti.read && (
                            <span className="text-[10px] bg-sunny text-primary font-semibold px-2 py-1 rounded-full">
                                {languages[lang].notifications.unreadTag}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
