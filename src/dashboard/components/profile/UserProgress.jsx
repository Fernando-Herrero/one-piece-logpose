import { AuthContext } from "@/context/AuthContext";
import { SagaContext } from "@/context/SagaContext";
import { UserBarProgress } from "@/dashboard/components/UserBarProgress";
import { useDevice } from "@/hooks/useDevice";
import { useTranslate } from "@/translations/useTranslate";
import classNames from "classnames";
import { useContext, useMemo } from "react";

export const UserProgress = () => {
    const { user, loading } = useContext(AuthContext);
    const { saga } = useContext(SagaContext);
    const { t } = useTranslate();
    const { isMobile, isTablet } = useDevice();

    const items = useMemo(
        () => [
            { title: t("saga_data.saga"), value: saga?.saga },
            { title: t("saga_data.arc"), value: saga?.arc },
            { title: t("saga_data.episode"), value: saga?.episode },
        ],
        [t, saga]
    );

    return (
        <>
            {loading ? (
                <SkeletonText lines={4} className="bg-primary border border-white/30 rounded-xl p-2" />
            ) : (
                <article
                    className={classNames(
                        "flex flex-col gap-2 p-2 rounded-xl border border-white/30 bg-gradient-card shadow card-content transition hover:-translate-0.5 hover:shadow-2xl sm:p-6",
                        {
                            "p-6": isMobile,
                            "p-8": isTablet,
                        }
                    )}
                >
                    <div className="flex gap-1 text-sm sm:text-base">
                        {items.map(({ title, value }, index) => (
                            <p
                                key={`${title}-${index}`}
                                className="flex items-center gap-1 text-primary font-semibold pl-4 first:p-0"
                            >
                                {title}:<span className="text-gradient font-normal">{value}</span>
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col text-sm sm:text-base">
                        <UserBarProgress experience={user?.experience} className="h-4" />
                        <div className="flex gap-1">
                            <p className="text-primary font-semibold">{t("saga_data.experience")}:</p>
                            <span className="text-gradient font-normal">{user?.experience}</span>
                        </div>
                    </div>
                </article>
            )}
        </>
    );
};
