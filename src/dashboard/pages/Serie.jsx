import { Button } from "@/components/Button";
import { ModalContext } from "@/context/ModalContext";
import { SagaContext } from "@/context/SagaContext";
import { AccordionSerie } from "@/dashboard/components/serie/AccordionSerie";
import { ArcList } from "@/dashboard/components/serie/ArcsList";
import { arcs } from "@/dashboard/data/serieData/arcs";
import { sagas } from "@/dashboard/data/serieData/sagas";
import { useTranslate } from "@/translations/useTranslate";
import { useCallback, useContext } from "react";

const getArcsBySaga = (firstArc, lastArc) => {
    return arcs.filter((arc) => arc.arc_id >= firstArc && arc.arc_id <= lastArc);
};

const Serie = () => {
    const { t } = useTranslate();
    const { resetProgress } = useContext(SagaContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const handleReset = useCallback(() => {
        showModal({
            message: this("modal.delete_progress"),
            onConfirm: () => {
                resetProgress();
                hideModal();
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            },
            onCancel: hideModal,
            confirmText: this("modal.confirm_logout"),
        });
    }, []);

    return (
        <section className="flex flex-col gap-2 p-2 space-y-1 mx-auto max-w-lg mb-40 sm:mb-10 md:p-8 lg:max-w-container">
            <Button variant="danger" onClick={handleReset} className="ml-auto">
                {t("saga_data.reset_progress")}
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

export default Serie;
