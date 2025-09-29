import { followUserApi } from "@/core/user/user.api";

export const useUser = () => {
    const followUser = async (userId) => {
        try {
            await followUserApi(userId);
        } catch (error) {
            console.error("Error al seguir al usuario", error);
        }
    };

    return { followUser };
};
