import { getProfileApi } from "@/core/auth/auth.api";
import { getTokenFromLocalStorage, saveUserInLocalStorage } from "@/core/auth/auth.service";
import { createContext, useEffect, useMemo, useState } from "react";
import { type AuthContextProps, type AuthContextValue, type User } from "../types/auth.types";

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    console.log(user);
    const userPrivacy = user?.privacy;
    const isAdmin = user?.role === "admin";
    const isVerified = !!user?.verified;

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
            setError(error instanceof Error ? error.message : String(error));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const contextValue: AuthContextValue = useMemo(
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
