import { getProfileApi, updateProfileApi } from "@/core/auth/auth.api";
import { getTokenFromLocalStorage, saveUserInLocalStorage } from "@/core/auth/auth.service";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("Mi user actual es", user);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setError(null);

                const token = getTokenFromLocalStorage();
                if (!token) return;

                const freshUser = await getProfileApi();
                if (freshUser) {
                    const needsInitialization = !freshUser.sagaProgress || !freshUser.experience;

                    const userWithProgress = {
                        ...freshUser,
                        sagaProgress: freshUser.sagaProgress || {
                            currentSaga: 0,
                            episode: 0,
                        },
                        experience: 0,
                    };
                    setUser(userWithProgress);
                    saveUserInLocalStorage(userWithProgress);

                    if (needsInitialization) {
                        await updateProfileApi(userWithProgress, {
                            sagaProgress: userWithProgress.sagaProgress,
                            experience: userWithProgress.experience,
                        });
                        console.log("Campos inicializados en el backend");
                    }
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
