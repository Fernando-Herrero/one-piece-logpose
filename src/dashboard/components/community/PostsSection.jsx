import { PostContext } from "@/context/PostContext";
import { PostCard } from "@/dashboard/components/community/PostCard";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";

export const PostsSection = () => {
    const { posts, loading, error } = useContext(PostContext);
    const { t } = useTranslate();
    if (!posts) return <p>{languages[lang].posts.noPosts}</p>;
    if (loading)
        return (
            <div className="flex flex-col items-center justify-center max-h-screen mx-auto gap-1">
                <Spinner />{" "}
                <p className="text-gradient dark:text-black">
                    {t("posts.loading_posts")}
                    <LoadingDots />
                </p>
            </div>
        );
    if (error) return <p className="text-red-700">{error}</p>;

    return (
        <section className="flex flex-col items-center space-y-1 max-w-md">
            {posts.map((post, index) => (
                <PostCard key={post.id} postId={post.id} index={index} />
            ))}
        </section>
    );
};
