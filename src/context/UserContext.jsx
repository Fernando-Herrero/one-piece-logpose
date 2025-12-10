import { getUserApi } from "@/core/posts/posts.api";
import { createContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const userPrivacy = user?.privacy;

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

    const value = useMemo(() => ({ user, setUser, loading, error, userPrivacy }), [userId, loading, error]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
