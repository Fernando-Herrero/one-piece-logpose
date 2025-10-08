import { getPostsApi } from "@/core/posts/posts.api";
import { createContext, useEffect, useState } from "react";

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
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

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, error, setError }}>
            {children}
        </PostContext.Provider>
    );
};
