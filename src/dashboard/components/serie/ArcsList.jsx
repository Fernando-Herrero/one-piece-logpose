import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { EpisodeItem } from "@/dashboard/components/serie/EpisodesItem";
import { episodes } from "@/dashboard/data/serieData/episodes";
import { useCallback } from "react";

export const ArcList = ({ arcsInSaga, sagaId }) => {
    const getEpisodesByArc = useCallback(
        (firstEpisode, lastEpisode) => {
            return episodes.filter(
                (episode) => episode.episode_id >= firstEpisode && episode.episode_id <= lastEpisode
            );
        },
        [arcsInSaga]
    );
    console.log("Rendering ArcList for sagaId:", sagaId);

    return (
        <>
            {arcsInSaga.map(({ arc_id, name, description, total_episodes, first_episode, last_episode }) => {
                const episodesInArc = getEpisodesByArc(first_episode, last_episode);
                // console.log(
                //     "Rendering arc:",
                //     name,
                //     "with episodes:",
                //     episodesInArc.map((e) => e.name)
                // );

                return (
                    <AccordionSerie
                        key={arc_id}
                        type="arcs"
                        name={name}
                        text={description}
                        episodes={total_episodes}
                    >
                        {episodesInArc.map((episode) => (
                            <EpisodeItem
                                key={episode.episode_id}
                                {...episode}
                                currentArcId={arc_id}
                                currentSagaId={sagaId}
                                isLastEpisodeOfArc={episode.episode_id === last_episode}
                                isLastArcOfSaga={arc_id === arcsInSaga[arcsInSaga.length - 1].arc_id}
                            />
                        ))}
                    </AccordionSerie>
                );
            })}
        </>
    );
};
