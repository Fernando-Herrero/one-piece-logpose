import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { EpisodeItem } from "@/dashboard/components/serie/EpisodesItem";
import { episodes } from "@/dashboard/data/serieData/episodes";

const getEpisodesByArc = (firstEpisode, lastEpisode) => {
    return episodes.filter(
        (episode) => episode.episode_id >= firstEpisode && episode.episode_id <= lastEpisode
    );
};

export const ArcList = ({ arcsInSaga, sagaId }) => (
    <>
        {arcsInSaga.map(({ arc_id, name, description, total_episodes, first_episode, last_episode }) => {
            const episodesInArc = getEpisodesByArc(first_episode, last_episode);

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
