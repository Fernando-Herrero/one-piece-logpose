import { LanguagesContext } from "@/context/LanguagesContext";
import { AchievementsPanel } from "@/dashboard/components/serie/AchievementsPanel";
import { languages } from "@/helpers/languages";
import { useEpisodeCheck } from "@/hooks/useEpisodeCheck";
import classNames from "classnames";
import { useContext } from "react";

export const EpisodeItem = ({
    episode_id,
    name,
    description,
    achievements,
    experience,
    currentArcId,
    currentSagaId,
    isLastEpisodeOfArc,
    isLastArcOfSaga,
}) => {
    const { lang } = useContext(LanguagesContext);
    const achievementTypes = ["characters", "items", "fruits", "swords", "boats"];

    const { inputCheck, isLoading, handleToggleCheck } = useEpisodeCheck(
        episode_id,
        experience,
        currentSagaId,
        currentArcId,
        isLastEpisodeOfArc,
        isLastArcOfSaga,
        achievements
    );

    return (
        <li className="bg-primary/50 p-2 rounded-xl border-white/10 shadow">
            <div className="flex gap-1 text-xs text-primary font-semibold">
                <span>{episode_id}.</span>
                <p>{name}</p>
            </div>

            <div className="relative group z-10 transition duration-300">
                <label className="flex items-center gap-1 cursor-pointer">
                    <p className="text-xs text-gradient p-2">{description}</p>
                    <input
                        className={classNames("cursor-pointer", {
                            "opacity-50 cursor-not-allowed": isLoading,
                        })}
                        type="checkbox"
                        checked={inputCheck}
                        onChange={handleToggleCheck}
                        disabled={isLoading}
                    />
                </label>

                <div className="opacity-0 bg-sunny text-primary rounded-xl p-2 absolute z-20 bottom-0 right-3 transition duration-300 group-hover:opacity-100 pointer-events-none">
                    <p>{languages[lang].sagaData.viewedChapter}</p>
                </div>
            </div>

            <AchievementsPanel
                inputCheck={inputCheck}
                achievementTypes={achievementTypes}
                achievements={achievements}
                experience={experience}
                lang={lang}
            />
        </li>
    );
};
