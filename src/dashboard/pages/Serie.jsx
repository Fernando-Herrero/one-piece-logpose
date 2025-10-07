import { LanguagesContext } from "@/context/LanguagesContext";
import { SagaContext } from "@/context/SagaContext";
import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { ArcList } from "@/dashboard/components/serie/ArcsList";
import { arcs } from "@/dashboard/data/serieData/arcs";
import { sagas } from "@/dashboard/data/serieData/sagas";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

const getArcsBySaga = (firstArc, lastArc) => {
    return arcs.filter((arc) => arc.arc_id >= firstArc && arc.arc_id <= lastArc);
};

export const Serie = () => {
    const { lang } = useContext(LanguagesContext);
    const { resetProgress } = useContext(SagaContext);

    return (
        <section className="flex flex-col gap-2 p-2 space-y-1 mx-auto max-w-container md:p-8">
            <button
                className="px-4 py-2 bg-linePrimary hover:bg-linePrimary rounded-xl transition-all hover:-translate-y-0.5 text-primary ml-auto cursor-pointer"
                onClick={resetProgress}
            >
                {languages[lang].sagaData.resetProgress}
            </button>
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
                        <ArcList arcsInSaga={arcsInSaga} sagaId={saga_id} />
                    </AccordionSerie>
                );
            })}
        </section>
    );
};
