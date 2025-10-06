export const calculateNewProgress = (
    currentSagaId,
    currentArcId,
    episode_id,
    isLastEpisodeOfArc,
    isLastArcOfSaga
) => {
    let newArc = currentArcId;
    let newSaga = currentSagaId;

    if (isLastEpisodeOfArc) {
        newArc = currentArcId + 1;

        if (isLastArcOfSaga) {
            newSaga = currentSagaId + 1;
        }
    }

    return { saga: newSaga, arc: newArc, episode: episode_id };
};

export const calculateNewExperience = (currentExperience, experienceToAdd, isAdding) => {
    const experience = Number(currentExperience || 0);
    const value = Number(experienceToAdd || 0);

    const newExperience = isAdding ? experience + value : experience - value;

    return Math.max(0, newExperience);
};

export const isProgressGreater = (newProgress, currentProgress) => {
    if (!currentProgress) return true;

    if (newProgress.saga > currentProgress.saga) return true;
    if (newProgress.saga < currentProgress.saga) return false;

    if (newProgress.arc > currentProgress.arc) return true;
    if (newProgress.arc < currentProgress.arc) return false;

    return newProgress.episode > currentProgress.episode;
};
