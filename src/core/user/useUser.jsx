import { AuthContext } from "@/context/AuthContext";
import { UsersContext } from "@/context/UsersContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import {
    deleteUserApi,
    followUserApi,
    getBookmarksUserApi,
    getCommentsUserApi,
    getLikesUserApi,
    getPostsUserApi,
    getStatsUserApi,
    getUsersApi,
    unfollowUserApi,
} from "@/core/user/user.api";
import { useContext } from "react";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setUsers } = useContext(UsersContext);

    const userAuthId = user?.id || user?._id;

    const followUser = async (userId) => {
        try {
            const response = await followUserApi(userId);

            // setUser((prev) => {
            //     const updatedUser = {
            //         ...prev,
            //         following: [...prev.following, userId],
            //     };
            //     saveUserInLocalStorage(updatedUser);
            //     return updatedUser;
            // });

            // setUsers((prev) =>
            //     prev.map((user) =>
            //         user.id === userId || user._id === userId
            //             ? { ...user, followers: [...(user.followers || []), userAuthId] }
            //             : user
            //     )
            // );

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

    const deleteUser = async (userId) => {
        try {
            const deleteUser = await deleteUserApi(userId);
            setUsers((prev) => prev.filter((user) => user.id !== userId));
            return deleteUser;
        } catch (error) {
            console.error("Error al eliminar el usuario", error);
            setError(error);
        }
    };

    const getPostsUser = async (userId) => {
        try {
            const dataPostsUser = await getPostsUserApi(userId);

            return dataPostsUser;
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

    const getBookmarksUser = async (userId) => {
        try {
            const dataPostsUser = await getBookmarksUserApi(userId);

            return dataPostsUser;
        } catch (error) {
            console.error("Error al obtener los likes del usuario", error);
        }
    };

    const getCommentsUser = async (userId) => {
        try {
            const dataPostsUser = await getCommentsUserApi(userId);

            return dataPostsUser;
        } catch (error) {
            console.error("Error al obtener los likes del usuario", error);
        }
    };

    const getStatsUser = async (userId) => {
        try {
            const dataPostsUser = await getStatsUserApi(userId);

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
        deleteUser,
        getBookmarksUser,
        getCommentsUser,
        getStatsUser,
    };
};
