import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { EpisodeItem } from "@/dashboard/components/serie/episodesItem";
import { arcs } from "@/dashboard/data/serieData/arcs";
import { episodes } from "@/dashboard/data/serieData/episodes";
import { sagas } from "@/dashboard/data/serieData/sagas";

export const Serie = () => {
    return (
        <section className="p-2 space-y-1">
            {sagas.map(({ name, saga_id, japaneseName, total_episodes, first_arc, last_arc }) => {
                const arcsInSagas = arcs.filter((arc) => arc.arc_id >= first_arc && arc.arc_id <= last_arc);

                return (
                    <AccordionSerie
                        key={saga_id}
                        type="saga"
                        name={name}
                        text={japaneseName}
                        episodes={total_episodes}
                    >
                        {arcsInSagas.map(
                            ({ arc_id, name, description, total_episodes, first_epsiode, last_episode }) => {
                                const episodesInArcs = episodes.filter(
                                    (episode) =>
                                        episode.episode_id >= first_epsiode &&
                                        episode.episode_id <= last_episode
                                );
                                return (
                                    <AccordionSerie
                                        key={arc_id}
                                        type="arcs"
                                        name={name}
                                        text={description}
                                        episodes={total_episodes}
                                    >
                                        {episodesInArcs.map(
                                            ({ episode_id, name, description, achievements, experience }) => (
                                                <EpisodeItem
                                                    key={episode_id}
                                                    episode_id={episode_id}
                                                    name={name}
                                                    description={description}
                                                    achievements={achievements}
                                                    experience={experience}
                                                />
                                            )
                                        )}
                                    </AccordionSerie>
                                );
                            }
                        )}
                    </AccordionSerie>
                );
            })}
        </section>
    );
};
