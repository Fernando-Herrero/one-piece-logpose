import cross from "@/assets/icons/cross-close.svg";
import { PostContext } from "@/context/PostContext";
import { PostCard } from "@/dashboard/components/community/PostCard";
import { PostComments } from "@/dashboard/components/community/PostComments";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const PostPage = ({ onCancel }) => {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");

    const { posts } = useContext(PostContext);
    const post = posts.find((p) => p.id === postId);

    if (!post) return;

    return (
        <section className="flex flex-col items-center gap-4 w-[80vw] max-w-96 rounded overflow-hidden">
            <div className="w-8 cursor-pointer" onClick={onCancel}>
                <img src={cross} alt="Cross icon" />
            </div>

            <div className="rounded w-full bg-white">
                <PostCard post={post} view={false} classSelect="secondary" />
                <PostComments post={post} />
            </div>
        </section>
    );
};
