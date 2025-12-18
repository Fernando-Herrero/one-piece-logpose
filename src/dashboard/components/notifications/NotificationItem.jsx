export const NotificationItem = ({ noti, t, handleCheck, handleDelete }) => {
    return (
        <div
            className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition-transform hover:-translate-0.5 relative ${
                noti.read ? "bg-sunny" : "bg-secondary border-l-4 border-sunny"
            }`}
        >
            <div className="flex-1 pr-1">
                <p className="text-sm text-primary">
                    <strong>{noti.from.displayName || noti.from.username}</strong>{" "}
                    {noti.type === "like" && t("notifications.liked")}
                    {noti.type === "follow" && t("notifications.followed")}
                    {noti.type === "bookmark" && t("notifications.bookmarked")}
                    {noti.type === "comment" && t("notifications.comment")}
                </p>
                {noti.postId && (
                    <p className="text-xs text-muted mt-1 italic">
                        "{noti.postId.text?.slice(0, 80)}
                        {noti.postId.text?.length > 80 ? "..." : ""}"
                    </p>
                )}
                <span className="text-xs text-muted">{new Date(noti.createdAt).toLocaleString()}</span>
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
                            {t("notifications.mark_as_read")}
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
    );
};
