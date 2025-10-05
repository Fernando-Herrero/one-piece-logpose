import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { ArcList } from "@/dashboard/components/serie/ArcsList";
import { arcs } from "@/dashboard/data/serieData/arcs";
import { sagas } from "@/dashboard/data/serieData/sagas";

const getArcsBySaga = (firstArc, lastArc) => {
    return arcs.filter((arc) => arc.arc_id >= firstArc && arc.arc_id <= lastArc);
};

export const Serie = () => {
    return (
        <section className="p-2 space-y-1">
            {sagas.map(({ name, saga_id, japaneseName, total_episodes, first_arc, last_arc }) => {
                const arcsInSaga = getArcsBySaga(first_arc, last_arc);

                return (
                    <AccordionSerie
                        key={saga_id}
                        type="saga"
                        name={name}
                        text={japaneseName}
                        episodes={total_episodes}
                    >
                        <ArcList arcsInSaga={arcsInSaga} />
                    </AccordionSerie>
                );
            })}
        </section>
    );
};
