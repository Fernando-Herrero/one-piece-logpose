import { LanguagesContext } from "@/context/LanguagesContext";
import { usePosts } from "@/core/posts/usePosts";
import { PostCard } from "@/dashboard/components/Community/PostCard";
import { Spinner } from "@/dashboard/components/Community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext } from "react";

export const PostsSection = () => {
    const { posts, loading, error } = usePosts();
    const { lang } = useContext(LanguagesContext);

    if (!posts) return <p>{languages[lang].posts.noPosts}</p>;
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient">
                    {languages[lang].posts.loadingPosts}
                    <LoadingDots />
                </p>
            </div>
        );
    if (error) return <p className="text-red-700">{error}</p>;

    return (
        <section className="flex flex-col items-center space-y-1">
            {posts.map((post, index) => (
                <PostCard key={`${post.id}-${index}`} post={post} index={index} />
            ))}
        </section>
    );
};
