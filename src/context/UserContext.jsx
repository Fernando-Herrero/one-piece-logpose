import { getUserApi } from "@/core/posts/posts.api";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                setUser(null);
                setLoading(false);
                setError(null);
                return;
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

    return <UserContext.Provider value={{ user, loading, error }}>{children}</UserContext.Provider>;
};
