import bookBlue from "@/assets/icons/bookmark-blue-icon.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import commentIcon from "@/assets/icons/comment-icon.svg";
import heartIcon from "@/assets/icons/heart-icon.svg";
import likeHeart from "@/assets/icons/heart-red-icon.svg";
import { AuthContext } from "@/context/AuthContext";
import { usePosts } from "@/core/posts/usePosts";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext, useState } from "react";

export const PostStats = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { likePost, bookmarkPost } = usePosts();
    const { goTo } = useGoTo();

    const userId = user.id;
    const hasLiked = post.likes.includes(userId);
    const hasBookmark = post.bookmarks.includes(userId);

    const [statsState, setStatsState] = useState({
        heart: hasLiked,
        bookmark: hasBookmark,
    });

    const toggleLike = () => {
        if (hasLiked) {
            likePost(post.id);
            setStatsState((prev) => ({ ...prev, heart: false }));
        } else {
            likePost(post.id);
            setStatsState((prev) => ({ ...prev, heart: true }));
        }
    };

    const toggleBookmark = () => {
        if (hasBookmark) {
            bookmarkPost(post.id);
            setStatsState((prev) => ({ ...prev, bookmark: false }));
        } else {
            bookmarkPost(post.id);
            setStatsState((prev) => ({ ...prev, bookmark: true }));
        }
    };

    const handleComment = () => {
        console.log("clickando comment");
        goTo(`/dashboard/community/comment?postId=${post.id}`);
    };

    const statsConfig = [
        { icon: commentIcon, count: post.commentsCount, alt: "Comment icon", onClick: handleComment },
        {
            icon: statsState.heart ? likeHeart : heartIcon,
            count: post.likesCount,
            alt: "Heart icon",
            onClick: toggleLike,
        },
        {
            icon: statsState.bookmark ? bookBlue : bookmarkIcon,
            count: post.bookmarksCount,
            alt: "Bookmark icon",
            onClick: toggleBookmark,
        },
    ];

    return (
        <div className="flex items-center justify-between px-4">
            {statsConfig.map(({ icon, count, alt, onClick }) => (
                <div key={alt}>
                    <button className="flex items-center gap-1 cursor-pointer" onClick={onClick}>
                        <img className="w-4" src={icon} alt={alt} />
                        <span className="text-gradient">{count}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};
