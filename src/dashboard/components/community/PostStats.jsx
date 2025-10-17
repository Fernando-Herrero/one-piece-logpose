import bookBlue from "@/assets/icons/bookmark-blue-icon.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import commentIcon from "@/assets/icons/comment-icon.svg";
import heartIcon from "@/assets/icons/heart-icon.svg";
import likeHeart from "@/assets/icons/heart-red-icon.svg";
import { AuthContext } from "@/context/AuthContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { usePosts } from "@/core/posts/usePosts";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext, useState } from "react";

export const PostStats = ({ post, view }) => {
    const { likePost, bookmarkPost } = usePosts();
    const { goTo } = useGoTo();
    const { notification } = useNotifications();
    const { user } = useContext(AuthContext);

    const userId = user?.id || user?._id;
    const postUserId = post?.userId.id;
    const postId = post?.id || post?._id;

    const [isLiking, setIsLiking] = useState(false);
    const [isBookmarking, setIsBookmarking] = useState(false);

    const shouldShowLiked = post.liked !== undefined ? post.liked : post.userLiked;
    const shouldShowBookmarked = post.bookmarked !== undefined ? post.bookmarked : post.userBookmarked;

    const toggleLike = async () => {
        if (isLiking) return;
        setIsLiking(true);
        try {
            const wasliked = shouldShowLiked;
            await likePost(post.id);

            if (!wasliked) {
                const notificationData = {
                    type: "like",
                    to: postUserId,
                    from: userId,
                    postId: postId,
                };

                console.log("Datos de la notificacion enviados", notificationData);
                await notification(notificationData);
            }
        } finally {
            setIsLiking(false);
        }
    };

    const toggleBookmark = async () => {
        if (isBookmarking) return;
        setIsBookmarking(true);
        try {
            const wasBookmarked = shouldShowBookmarked;
            await bookmarkPost(post.id);

            if (!wasBookmarked) {
                const notificationData = {
                    type: "bookmark",
                    to: postUserId,
                    from: userId,
                    postId: postId,
                };

                console.log("Datos de la notificacion enviados", notificationData);
                await notification(notificationData);
            }
        } finally {
            setIsBookmarking(false);
        }
    };

    const handleComment = () => {
        goTo(`/dashboard/community/comment?postId=${post.id}`);
    };

    const statsConfig = [
        {
            icon: commentIcon,
            count: post.commentsCount,
            alt: "Comment icon",
            onClick: handleComment,
            disabled: false,
        },
        {
            icon: shouldShowLiked ? likeHeart : heartIcon,
            count: post.likesCount,
            alt: "Heart icon",
            onClick: toggleLike,
            disabled: isLiking,
        },
        {
            icon: shouldShowBookmarked ? bookBlue : bookmarkIcon,
            count: post.bookmarksCount,
            alt: "Bookmark icon",
            onClick: toggleBookmark,
            disabled: isBookmarking,
        },
    ];

    return (
        <div className="flex items-center justify-between px-4 mt-2 pt-1 border-t border-white/50">
            {statsConfig.map(({ icon, count, alt, onClick, disabled }, index) => (
                <div key={`${alt}-${index}`}>
                    <button
                        className="flex items-center gap-1 cursor-pointer transition-transform duration-300 active:scale-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {alt === "Comment icon" ? (
                            <>
                                <img className={`w-4 ${view ? "" : "opacity-30"}`} src={icon} alt={alt} />
                                <span className={`text-gradient ${view ? "" : "opacity-30"}`}>{count}</span>
                            </>
                        ) : (
                            <>
                                <img className="w-4" src={icon} alt={alt} />
                                <span className="text-gradient">{count}</span>
                            </>
                        )}
                    </button>
                </div>
            ))}
        </div>
    );
};
