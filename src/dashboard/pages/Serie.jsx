import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
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
    const { showModal, hideModal } = useContext(ModalContext);

    const handleReset = () => {
        showModal({
            message: languages[lang].modal.deleteProgress,
            onConfirm: () => {
                resetProgress();
                hideModal();
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            },
            onCancel: hideModal,
            confirmText: languages[lang].modal.confirmLogOut,
        });
    };

    return (
        <section className="flex flex-col gap-2 p-2 space-y-1 mx-auto max-w-container md:p-8">
            <Button variant="danger" onClick={handleReset} className="ml-auto">
                {languages[lang].sagaData.resetProgress}
            </Button>
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
