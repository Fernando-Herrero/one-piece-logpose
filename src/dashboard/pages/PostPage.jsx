import { PostContext } from "@/context/PostContext";
import { PostCard } from "@/dashboard/components/Community/PostCard";
import { PostComments } from "@/dashboard/components/Community/PostComments";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const PostPage = () => {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");

    const { posts } = useContext(PostContext);
    const post = posts.find((p) => p.id === postId);

    if (!post) return;

    return (
        <>
            <PostCard post={post} view={false} classSelect="secondary" />
            <PostComments post={post} />
        </>
    );
};
