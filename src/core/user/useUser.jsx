import { followUserApi, unfollowUserApi } from "@/core/user/user.api";

export const useUser = () => {
    const followUser = async (userId) => {
        try {
            await followUserApi(userId);
        } catch (error) {
            console.error("Error al seguir al usuario", error);
        }
    };

    const unfollowUser = async (userId) => {
        try {
            await unfollowUserApi(userId);
        } catch (error) {
            console.error("Error al dejar de seguir al usuario", error);
        }
    };

    return { followUser, unfollowUser };
};
