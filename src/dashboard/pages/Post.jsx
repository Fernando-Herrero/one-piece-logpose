import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { usePosts } from "@/core/posts/usePosts";
import { PostForm } from "@/dashboard/components/community/PostForm";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";

export const Post = ({ onCancel }) => {
    const { error, setError } = useContext(PostContext);
    const { createPost } = usePosts();
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const handleSubmit = async (formData) => {
        await createPost(formData);
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
