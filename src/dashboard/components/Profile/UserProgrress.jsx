import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { SagaContext } from "@/context/SagaContext";
import { UserBarProgress } from "@/dashboard/components/UserBarProgress";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useContext } from "react";

export const UserProgress = () => {
    const { user, loading } = useContext(AuthContext);
    const { saga } = useContext(SagaContext);
    const { lang } = useContext(LanguagesContext);
    const { isMobile, isTablet } = useDevice();

    return (
        <>
            {loading ? (
                <SkeletonText lines={4} className="bg-primary border border-white/30 rounded-xl p-2" />
            ) : (
                <section
                    className={classNames(
                        "flex flex-col gap-2 p-2 rounded-xl border border-white/30 bg-gradient-card shadow transition hover:-translate-0.5 hover:shadow-2xl sm:p-6",
                        {
                            "p-6": isMobile,
                            "p-8": isTablet,
                        }
                    )}
                >
                    <div className="flex gap-1 text-sm sm:text-base">
                        <p className="flex gap-1 text-primary font-semibold">
                            {languages[lang].sagaData.saga}:
                            <span className="text-gradient font-normal">{saga?.saga}</span>
                        </p>
                        <p className="flex gap-1 text-primary font-semibold">
                            {languages[lang].sagaData.arc}:
                            <span className="text-gradient font-normal">{saga?.arc}</span>
                        </p>
                        <p className="flex gap-1 text-primary font-semibold">
                            {languages[lang].sagaData.episode}:
                            <span className="text-gradient font-normal">{saga?.episode}</span>
                        </p>
                    </div>

                    <div className="flex flex-col text-sm sm:text-base">
                        <UserBarProgress experience={user?.experience} className="h-4" />
                        <div className="flex gap-1">
                            <p className="text-primary font-semibold">
                                {languages[lang].sagaData.experience}:
                            </p>
                            <span className="text-gradient font-normal">{user?.experience}</span>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
