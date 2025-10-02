import { AuthContext } from "@/context/AuthContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import {
    followUserApi,
    getMyBookmarkedPostsApi,
    getMyCommentedPostsApi,
    getMyLikedPostsApi,
    getMyPostsApi,
    getUsersApi,
    getUserStatsApi,
    unfollowUserApi,
} from "@/core/user/user.api";
import { useContext } from "react";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);

    const followUser = async (userId) => {
        try {
            const response = await followUserApi(userId);

            setUser((prev) => {
                const updatedUser = {
                    ...prev,
                    following: [...prev.following, userId],
                };
                saveUserInLocalStorage(updatedUser);
                return updatedUser;
            });
            return response;
        } catch (error) {
            console.error("Error al seguir al usuario", error);
        }
    };

    const unfollowUser = async (userId) => {
        try {
            const response = await unfollowUserApi(userId);

            setUser((prev) => {
                const updatedUser = {
                    ...prev,
                    following: prev.following.filter((id) => id !== userId),
                };
                saveUserInLocalStorage(updatedUser);
                return updatedUser;
            });
            return response;
        } catch (error) {
            console.error("Error al dejar de seguir al usuario", error);
        }
    };

    const getUsers = async () => {
        try {
            const dataUsers = await getUsersApi();
            return dataUsers;
        } catch (error) {
            console.error("Error al obtener todos los usuarios", error);
        }
    };

    const getUserStats = async () => {
        try {
            const dataStats = await getUserStatsApi();
            return dataStats;
        } catch (error) {
            console.error("Error al obtener stats del usuario", error);
        }
    };

    const getMyPosts = async () => {
        try {
            const dataPosts = await getMyPostsApi();
            console.log("Esta es la data de mis posts", dataPosts);
            return dataPosts;
        } catch (error) {
            console.error("Error al obtener mis posts", error);
        }
    };
    const getMyLikedPosts = async () => {
        try {
            const dataLikedPosts = await getMyLikedPostsApi();
            console.log("Esta es la data de mis posts", dataLikedPosts);
            return dataLikedPosts;
        } catch (error) {
            console.error("Error al obtener mis liked posts", error);
        }
    };
    const getMyBookmarkedPosts = async () => {
        try {
            const dataBookmarkedPosts = await getMyBookmarkedPostsApi();
            console.log("Esta es la data de mis posts", dataBookmarkedPosts);
            return dataBookmarkedPosts;
        } catch (error) {
            console.error("Error al obtener mis bookmarked posts", error);
        }
    };
    const getMyCommentedPosts = async () => {
        try {
            const dataCommentedPosts = await getMyCommentedPostsApi();
            console.log("Esta es la data de mis posts", dataCommentedPosts);
            return dataCommentedPosts;
        } catch (error) {
            console.error("Error al obtener mis commented posts", error);
        }
    };

    return {
        followUser,
        unfollowUser,
        getUsers,
        getUserStats,
        getMyPosts,
        getMyLikedPosts,
        getMyBookmarkedPosts,
        getMyCommentedPosts,
    };
};
