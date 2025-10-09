import { AuthContext } from "@/context/AuthContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import { useAuth } from "@/core/auth/useAuth";
import { local } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";

export const SagaContext = createContext(null);

export const SagaProvider = ({ children }) => {
    const { user, setUser } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const [saga, setSaga] = useState({ saga: 0, arc: 0, episode: 0 });
    const { updatedProfile } = useAuth();

    useEffect(() => {
        if (user?.serieProgress) {
            setSaga(user.serieProgress);
        }
    }, [user]);

    const updateProgress = (newSaga, newArc, newEpisode) => {
        console.log("🔵 updateProgress llamado con:", { newSaga, newArc, newEpisode });

        setSaga((prev) => {
            console.log("🟡 Estado actual:", prev);

            if (newSaga > prev.saga) {
                console.log("✅ Actualizando: nueva saga mayor");
                return { saga: newSaga, arc: newArc, episode: newEpisode };
            }
            if (newSaga === prev.saga && newArc > prev.arc) {
                console.log("✅ Actualizando: nuevo arco mayor");
                return { saga: prev.saga, arc: newArc, episode: newEpisode };
            }
            if (newSaga === prev.saga && newArc === prev.arc && newEpisode > prev.episode) {
                console.log("✅ Actualizando: nuevo episodio mayor");
                return { saga: prev.saga, arc: prev.arc, episode: newEpisode };
            }

            console.log("❌ No se actualiza: progreso no es mayor");
            return prev;
        });
    };

    const resetProgress = async () => {
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
                console.log("✅ Progreso y experiencia reseteados en base de datos");
            } catch (error) {
                console.error("❌ Error al resetear progreso en BD:", error);
            }
        }

        console.log("✅ Progreso de saga y experiencia reseteados completamente");
    };

    return (
        <SagaContext.Provider value={{ saga, updateProgress, resetProgress }}>
            {children}
        </SagaContext.Provider>
    );
};
