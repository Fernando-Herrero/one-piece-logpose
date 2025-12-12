import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { usePosts } from "@/core/posts/usePosts";
import { PostForm } from "@/dashboard/components/community/PostForm";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { memo, useContext } from "react";

const Post = memo(({ onCancel }) => {
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
        onCancel();
    };

    return (
        <PostForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            error={error}
            onErrorChange={setError}
            placeholderText={languages[lang].posts.areaTextPost}
        />
    );
});

export default Post;
