import { AuthContext } from "@/context/AuthContext";
import { getPostsApi } from "@/core/posts/posts.api";
import { createContext, useContext, useEffect, useState } from "react";

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!user) {
                setPosts([]);
                return;
            }
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
    }, [user]);

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, error, setError }}>
            {children}
        </PostContext.Provider>
    );
};
