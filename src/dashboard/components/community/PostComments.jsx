import heartIcon from "@/assets/icons/heart-icon.svg";
import likeHeart from "@/assets/icons/heart-red-icon.svg";
import { AuthContext } from "@/context/AuthContext";
import { usePosts } from "@/core/posts/usePosts";
import { useContext, useState } from "react";

export const PostComments = ({ post }) => {
    const { comments } = post;
    const { user } = useContext(AuthContext);
    const userId = user._id;

    const { likeComment } = usePosts();
    const [isLiking, setIsLiking] = useState({});
    const isCommentLiked = (comment) => {
        return comment.liked !== undefined ? comment.liked : comment.likes.includes(userId);
    };

    const toggleLike = async (id) => {
        if (isLiking[id]) return;
        setIsLiking((prev) => ({ ...prev, [id]: true }));
        try {
            await likeComment(id);
        } finally {
            setIsLiking((prev) => ({ ...prev, [id]: false }));
        }
    };

    return (
        <section
            className={
                comments?.length > 0
                    ? "px-4 py-1 bg-secondary border border-white/30 border-t-0 rounded-bl rounded-br"
                    : "border border-white/30"
            }
        >
            {comments?.map((comment) => (
                <article
                    key={comment.id}
                    className="flex items-center justify-between p-1 border-b border-white/30 last:border-0"
                >
                    <div>
                        <div className="flex items-center gap-1">
                            <img className="w-4 rounded-full" src={comment.userId.avatar} alt="Avatar" />
                            <p className="text-primary text-xs">
                                {comment.userId.displayName
                                    ? comment.userId.displayName
                                    : comment.userId.lastName}
                            </p>
                            <span className="text-muted text-[10px]">@{comment.userId.username}</span>
                        </div>
                        <p className="text-gradient text-xs p-1">{comment.text}</p>
                    </div>
                    <button
                        className="flex gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => toggleLike(comment.id)}
                        disabled={isLiking[comment.id]}
                    >
                        <img
                            className="w-3"
                            src={isCommentLiked(comment) ? likeHeart : heartIcon}
                            alt={isCommentLiked(comment) ? "Red like heart icon" : "Heart icon"}
                        />
                        <span className="text-gradient text-[10px]">{comment.likesCount}</span>
                    </button>
                </article>
            ))}
        </section>
    );
};
