import { createPostApi, getPostsApi } from "@/core/posts/posts.api";
import { useEffect, useState } from "react";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await getPostsApi();
                setPosts(data);
            } catch (error) {
                console.error("Error al obtener posts", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const createPost = async (newPost) => {
        try {
            const created = await createPostApi(newPost);
            setPosts([...posts, created]);
        } catch (error) {
            console.error("Error al crar el post", error);
        }
    };

    return { posts, loading, error, setError, createPost };
};
