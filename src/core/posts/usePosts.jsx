import {
    bookmarkPostApi,
    createPostApi,
    deletePostApi,
    getPostsApi,
    likePostApi,
} from "@/core/posts/posts.api";
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
            console.error("Error al crear el post", error);
        }
    };

    const deletePost = async (id) => {
        try {
            await deletePostApi(id);
            setPosts((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Error al elimianr el post", error);
        }
    };

    const likePost = async (id) => {
        try {
            const result = await likePostApi(id);
            setPosts((prev) =>
                prev.map((post) =>
                    post.id === id ? { ...post, likesCount: result.likesCount, liked: result.liked } : post
                )
            );
        } catch (error) {
            console.error("Error al dar like al post", error);
            setError(error);
        }
    };

    const bookmarkPost = async (id) => {
        try {
            const result = await bookmarkPostApi(id);
            setPosts((prev) =>
                prev.map((post) =>
                    post.id === id
                        ? { ...post, bookmarksCount: result.bookmarksCount, bookmarked: result.bookmarked }
                        : post
                )
            );
        } catch (error) {
            console.error("Error al guardar el post", error);
            setError(error);
        }
    };

    return { posts, loading, error, setError, createPost, deletePost, likePost, bookmarkPost };
};
