import { getProfileApi } from "@/core/auth/auth.api";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const token = localStorage.getItem("token");
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

        fetchProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, error, setError, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
