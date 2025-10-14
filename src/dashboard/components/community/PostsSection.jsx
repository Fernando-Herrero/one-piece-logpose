import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { PostCard } from "@/dashboard/components/community/PostCard";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext } from "react";

export const PostsSection = () => {
    const { posts, loading, error } = useContext(PostContext);
    const { lang } = useContext(LanguagesContext);
    console.log("En postsection me estan llegando los posts", posts);
    if (!posts) return <p>{languages[lang].posts.noPosts}</p>;
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient dark:text-black">
                    {languages[lang].posts.loadingPosts}
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
