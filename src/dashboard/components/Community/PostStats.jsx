import bookBlue from "@/assets/icons/bookmark-blue-icon.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import commentIcon from "@/assets/icons/comment-icon.svg";
import heartIcon from "@/assets/icons/heart-icon.svg";
import likeHeart from "@/assets/icons/heart-red-icon.svg";
import { usePosts } from "@/core/posts/usePosts";
export const PostStats = ({ post }) => {
    const { likePost, bookmarkPost } = usePosts();

    const statsConfig = [
        { icon: commentIcon, count: post.commentsCount, alt: "Comment icon" },
        {
            icon: post.likesCount > 0 ? likeHeart : heartIcon,
            count: post.likesCount,
            alt: "Heart icon",
            onClick: () => likePost(post.id),
        },
        {
            icon: post.bookmarksCount > 0 ? bookBlue : bookmarkIcon,
            count: post.bookmarksCount,
            alt: "Bookmark icon",
            onClick: () => bookmarkPost(post.id),
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
