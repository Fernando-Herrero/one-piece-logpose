import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import commentIcon from "@/assets/icons/comment-icon.svg";
import heartIcon from "@/assets/icons/heart-icon.svg";

export const PostStats = ({ stats }) => {
    const statsConfig = [
        { icon: commentIcon, count: stats.commentsCount, alt: "Comment icon" },
        { icon: heartIcon, count: stats.likesCount, alt: "Heart icon" },
        { icon: bookmarkIcon, count: stats.bookmarksCount, alt: "Bookmark icon" },
    ];

    return (
        <div className="flex items-center justify-between px-4">
            {statsConfig.map(({ icon, count, alt }) => (
                <div key={alt} className="flex items-center gap-1">
                    <img className="w-4" src={icon} alt={alt} />
                    <span className="text-gradient">{count}</span>
                </div>
            ))}
        </div>
    );
};
