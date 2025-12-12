import { AuthContext } from "@/context/AuthContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import { useAuth } from "@/core/auth/useAuth";
import { local } from "@/helpers/storage";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const SagaContext = createContext(null);

export const SagaProvider = ({ children }) => {
    console.log("Render SagaProvider");

    const { user, setUser } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const [saga, setSaga] = useState({ saga: 0, arc: 0, episode: 0 });
    const { updatedProfile } = useAuth();

    useEffect(() => {
        if (user?.serieProgress) {
            setSaga(user.serieProgress);
        }
    }, [user]);

    const updateProgress = useCallback((newSaga, newArc, newEpisode) => {
        setSaga((prev) => {
            if (newSaga > prev.saga) {
                return { saga: newSaga, arc: newArc, episode: newEpisode };
            }
            if (newSaga === prev.saga && newArc > prev.arc) {
                return { saga: prev.saga, arc: newArc, episode: newEpisode };
            }
            if (newSaga === prev.saga && newArc === prev.arc && newEpisode > prev.episode) {
                return { saga: prev.saga, arc: prev.arc, episode: newEpisode };
            }
            return prev;
        });
    }, []);

    const resetProgress = useCallback(async () => {
        const resetState = { saga: 0, arc: 0, episode: 0 };
        setSaga(resetState);

        if (userId) {
            Object.keys(localStorage).forEach((key) => {
                if (key.startsWith("episode_") && key.endsWith(`_${userId}`)) {
                    local.remove(key);
                }
            });
        }

        if (user) {
            const updatedUserLocal = {
                ...user,
                serieProgress: resetState,
            };

            setUser(updatedUserLocal);
            saveUserInLocalStorage(updatedUserLocal);

            try {
                await updatedProfile(user, {
                    serieProgress: resetState,
                    experience: 0,
                });
            } catch (error) {
                console.error("❌ Error al resetear progreso en BD:", error);
            }
        }
    }, [user, userId, updatedProfile]);

    const value = useMemo(() => ({ saga, updateProgress, resetProgress }), [saga]);

    return <SagaContext.Provider value={value}>{children}</SagaContext.Provider>;
};
