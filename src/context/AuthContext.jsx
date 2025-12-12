import { getProfileApi } from "@/core/auth/auth.api";
import { getTokenFromLocalStorage, saveUserInLocalStorage } from "@/core/auth/auth.service";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    console.log("Render AuthProvider");

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userPrivacy = user?.privacy;
    const isAdmin = user?.role === "admin";
    const isVerified = user?.verified;

    const fetchProfile = async () => {
        try {
            setError(null);
            setLoading(true);

            const token = getTokenFromLocalStorage();
            if (!token) return;

            const freshUser = await getProfileApi();
            if (freshUser) {
                setUser(freshUser);
                saveUserInLocalStorage(freshUser);
            }
        } catch (error) {
            console.error("Error al obtener el usuario, no encontrado", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const contextValue = useMemo(
        () => ({
            user,
            setUser,
            error,
            setError,
            loading,
            isAdmin,
            isVerified,
            userPrivacy,
            clearError: () => setError(null),
        }),
        [user, error, loading]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
