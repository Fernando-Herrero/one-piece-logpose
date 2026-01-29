import { getProfileApi } from "@/core/auth/auth.api";
import {
    getTokenFromLocalStorage,
    removeTokenFromLocalStorage,
    removeUserFromLocalStorage,
    saveUserInLocalStorage,
} from "@/core/auth/auth.service";
import { useGoTo } from "@/hooks/useGoTo";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { goTo } = useGoTo();

    const userPrivacy = user?.privacy;
    const isAdmin = user?.role === "admin";
    const isVerified = user?.verified;

    const handleUnauthenticated = () => {
        removeTokenFromLocalStorage();
        removeUserFromLocalStorage();
        setUser(null);
        setError(null); // opcional
        goTo("/"); // redirige a la página pública o login
    };

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
            } else {
                // Token inválido o expirado
                handleUnauthenticated();
            }
        } catch (error) {
            if (error.response?.status === 401) {
                handleUnauthenticated();
            } else {
                console.error("Error al obtener el usuario, no encontrado", error);
                setError(error);
            }
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
