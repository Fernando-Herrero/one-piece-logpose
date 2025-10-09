import { AuthContext } from "@/context/AuthContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import {
    followUserApi,
    getLikesUserApi,
    getPostsUserApi,
    getUsersApi,
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

    const getPostsUser = async (userId) => {
        try {
            const dataPostsUser = await getPostsUserApi(userId);

            return dataPostsUser.posts;
        } catch (error) {
            console.error("Error al obtener los posts del usuario", error);
        }
    };

    const getLikesUser = async (userId) => {
        try {
            const dataPostsUser = await getLikesUserApi(userId);

            return dataPostsUser;
        } catch (error) {
            console.error("Error al obtener los likes del usuario", error);
        }
    };

    return {
        followUser,
        unfollowUser,
        getUsers,
        getPostsUser,
        getLikesUser,
    };
};
