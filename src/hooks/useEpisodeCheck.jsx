import { AuthContext } from "@/context/AuthContext";
import { SagaContext } from "@/context/SagaContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import { useAuth } from "@/core/auth/useAuth";
import {
    calculateNewExperience,
    calculateNewProgress,
    isProgressGreater,
} from "@/dashboard/data/serieProgressHelper";
import { local } from "@/helpers/storage";
import { useContext, useState } from "react";

export const useEpisodeCheck = (
    episode_id,
    experience,
    currentSagaId,
    currentArcId,
    isLastEpisodeOfArc,
    isLastArcOfSaga
) => {
    const checkedSaved = local.get(`episode_${episode_id}`);
    const [inputCheck, setInputCheck] = useState(checkedSaved || false);
    const [isLoading, setIsLoading] = useState(false);

    const { user, setUser } = useContext(AuthContext);
    const { updateProgress } = useContext(SagaContext);
    const { updatedProfile } = useAuth();

    const handleToggleCheck = async () => {
        const newCheckState = !inputCheck;
        setInputCheck(newCheckState);
        local.save(`episode_${episode_id}`, newCheckState);

        if (!user) return;

        setIsLoading(true);

        try {
            const calculatedProgress = calculateNewProgress(
                currentSagaId,
                currentArcId,
                episode_id,
                isLastEpisodeOfArc,
                isLastArcOfSaga
            );

            const currentProgress = user.serieProgress || { saga: 0, arc: 0, episode: 0 };

            const isGreaterProgress = isProgressGreater(calculatedProgress, currentProgress);

            const progressToSave = newCheckState && isGreaterProgress ? calculatedProgress : currentProgress;

            console.log("📊 Comparación de progreso:", {
                episodio: episode_id,
                marcando: newCheckState,
                calculado: calculatedProgress,
                actual: currentProgress,
                esMayor: isGreaterProgress,
                seGuardará: progressToSave,
            });

            const newExperience = calculateNewExperience(user.experience, experience, newCheckState);

            const updatedUserLocal = {
                ...user,
                experience: newExperience,
                serieProgress: progressToSave,
            };

            setUser(updatedUserLocal);

            if (newCheckState) {
                updateProgress(calculatedProgress.saga, calculatedProgress.arc, calculatedProgress.episode);
            }

            await updatedProfile(user, {
                experience: updatedUserLocal.experience,
                serieProgress: updatedUserLocal.serieProgress,
            });

            saveUserInLocalStorage(updatedUserLocal);

            console.log("✅ Progreso actualizado correctamente:", {
                episode: episode_id,
                checked: newCheckState,
                progressGuardado: progressToSave,
                experience: newExperience,
            });
        } catch (error) {
            console.error("❌ Error al actualizar progreso:", error);

            setUser(user);
            setInputCheck(!newCheckState);
            local.save(`episode_${episode_id}`, !newCheckState);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        inputCheck,
        isLoading,
        handleToggleCheck,
    };
};
