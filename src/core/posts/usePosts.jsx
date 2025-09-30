import { PostContext } from "@/context/PostContext";
import {
    bookmarkPostApi,
    createPostApi,
    deletePostApi,
    likePostApi,
    replyPostApi,
} from "@/core/posts/posts.api";
import { useContext } from "react";

export const usePosts = () => {
    const { setPosts, setError } = useContext(PostContext);

    const createPost = async (newPost) => {
        try {
            const created = await createPostApi(newPost);
            console.log("este es el post creado", created);
            setPosts((prev) => {
                const newPost = [created, ...prev];
                console.log("Este es mi nuevo post", newPost);
                return newPost;
            });
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

    const replyPost = async (newComment) => {
        try {
            const created = await replyPostApi(newComment);
            console.log("este es el comentario creado", created);
        } catch (error) {
            console.error("Error al comentar el post", error);
        }
    };

    return { createPost, deletePost, likePost, bookmarkPost, replyPost };
};
