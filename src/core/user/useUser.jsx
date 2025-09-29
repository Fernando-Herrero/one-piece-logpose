import { getUserApi } from "@/core/posts/posts.api";
import { followUserApi } from "@/core/user/user.api";
import { useEffect, useState } from "react";

export const useUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                setUser(null);
                setLoading(false);
                setError(null);
            }

            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const userData = await getUserApi(userId);
                console.log("El user es", userData);
                setUser(userData);
            } catch (error) {
                console.error("Error al obtener el usuario", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId]);

    const followUser = async (userId) => {
        try {
            const updatedUser = await followUserApi(userId);
        } catch (error) {}
    };

    return { user, loading, error };
};
