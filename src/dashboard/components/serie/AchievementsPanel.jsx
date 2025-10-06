import { AchievementList } from "@/dashboard/components/serie/AchievementsList";
import { languages } from "@/helpers/languages";
import classNames from "classnames";

export const AchievementsPanel = ({ inputCheck, achievementTypes, achievements, experience, lang }) => (
    <div
        className={classNames("text-xs grid rounded-xl bg-black/30 transition-all duration-300 ease-out", {
            "[grid-template-rows:1fr] gap-1 p-2 opacity-100": inputCheck,
            "[grid-template-rows:0fr] opacity-0": !inputCheck,
        })}
    >
        <div className="min-h-0 overflow-hidden">
            <h5 className="text-primary underline">{languages[lang].sagaData.achievements}</h5>

            {achievementTypes.map((type) => (
                <AchievementList key={type} labelKey={type} items={achievements?.[type]} lang={lang} />
            ))}

            {experience && (
                <p className="text-gradient flex items-center gap-1">
                    {languages[lang].sagaData.experience}
                    <span>+{experience}</span>
                </p>
            )}
        </div>
    </div>
);
