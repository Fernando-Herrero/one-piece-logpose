import { AchievementList } from "@/dashboard/components/serie/AchievementsList";
import classNames from "classnames";

export const AchievementsPanel = ({ inputCheck, achievementTypes, achievements, experience, t }) => (
    <div
        className={classNames("text-xs grid rounded-xl bg-black/20 transition-all duration-300 ease-out", {
            "[grid-template-rows:1fr] gap-1 p-2 opacity-100": inputCheck,
            "[grid-template-rows:0fr] opacity-0": !inputCheck,
        })}
    >
        <div className="min-h-0 overflow-hidden">
            <h5 className="text-primary underline">{t("saga_data.achievements")}</h5>

            {achievementTypes.map((type) => (
                <AchievementList key={type} labelKey={type} items={achievements?.[type]} t={t} />
            ))}

            {experience && (
                <p className="text-gradient flex items-center gap-1">
                    {t("saga_data.experience")}
                    <span>+{experience}</span>
                </p>
            )}
        </div>
    </div>
);
