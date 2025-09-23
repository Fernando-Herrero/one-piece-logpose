import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { usePosts } from "@/core/posts/usePosts";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext, useState } from "react";

export const Post = ({ onCancel }) => {
    const [contentPost, setContentPost] = useState({ text: "", image: "" });

    const { createPost, setError, error } = usePosts();
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const handleInputs = ({ target: { value, name } }) => {
        if (error) setError(null);
        setContentPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setContentPost({ text: "", image: "" });
        setError(null);
        goTo("/dashboard/community");
        onCancel();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!contentPost.text.trim()) return setError(languages[lang].posts.createPostError);

        const newPost = {
            text: contentPost.text,
            images: contentPost.image?.trim() ? [contentPost.image.trim()] : [],
        };

        await createPost(newPost);
        setContentPost({ text: "", image: "" });
        onCancel();
        setError(null);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <form
                className="bg-gradient-card flex flex-col items-center justify-between gap-2 p-2 min-w-[80vw] sm:min-w-md"
                onSubmit={handleSubmit}
            >
                <label className="w-full">
                    <textarea
                        name="text"
                        value={contentPost.text}
                        onChange={handleInputs}
                        maxLength={280}
                        placeholder={languages[lang].posts.areaTextPost}
                        className="bg-orange-100 p-2 min-h-80  w-full rounded-xl no-focus"
                    ></textarea>
                </label>

                <label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={contentPost.image}
                        onChange={handleInputs}
                        className="bg-orange-100 p-2 rounded-xl no-focus"
                    />
                    {contentPost.image && (
                        <img
                            src={contentPost.image}
                            alt="preview"
                            className="w-40 h-40 object-cover rounded-xl mt-2 border border-gray-300"
                            onError={(e) => (e.target.style.display = "none")}
                        />
                    )}
                </label>

                {error && <p className="text-red-700">{error}</p>}

                <div className="flex items-center gap-1">
                    <Button type="button" variant="danger" onClick={handleCancel}>
                        {languages[lang].modal.cancelText}
                    </Button>
                    <Button type="submit" variant="submit">
                        {languages[lang].contact.button}
                    </Button>
                </div>
            </form>
        </div>
    );
};
