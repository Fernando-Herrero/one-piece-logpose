import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { usePosts } from "@/core/posts/usePosts";
import { PostForm } from "@/dashboard/components/community/PostForm";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const Comment = ({ onCancel }) => {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");

    const { user } = useContext(AuthContext);
    const userAuthId = user?.id || user?._id;
    const { posts } = useContext(PostContext);
    const { replyPost } = usePosts();
    const { notification } = useNotifications();
    const { setError, error } = useContext(PostContext);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const postFromUser = posts.find((post) => post.id === postId);
    const userIdFromPost = postFromUser.userId.id;

    const handleSubmit = async (formData) => {
        const newComment = {
            postId: postId,
            ...formData,
        };

        await replyPost(newComment);
        await notification({ type: "bookmark", to: userIdFromPost, from: userAuthId, postId: postId });

        setError(null);
        onCancel();
    };

    const handleCancel = () => {
        setError(null);
        goTo("/dashboard/community");
        onCancel();
    };

    return (
        <PostForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            error={error}
            onErrorChange={setError}
            submitButtonText={languages[lang].contact.button}
            placeholderText={languages[lang].posts.areaTextPost}
        />
    );
};
