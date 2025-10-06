import { AuthContext } from "@/context/AuthContext";
import { createContext, useContext, useEffect, useState } from "react";

export const SagaContext = createContext(null);

export const SagaProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [saga, setSaga] = useState({ saga: 0, arc: 0, episode: 0 });

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

    return <SagaContext.Provider value={{ saga, updateProgress }}>{children}</SagaContext.Provider>;
};
