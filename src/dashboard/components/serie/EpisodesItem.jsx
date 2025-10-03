import { LanguagesContext } from "@/context/LanguagesContext";
import { AchievementList } from "@/dashboard/components/serie/AchievementsList";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

export const EpisodeItem = ({ episode_id, name, description, achievements, experience }) => {
    const { lang } = useContext(LanguagesContext);
    const achievementTypes = ["characters", "items", "fruits", "swords", "boats"];
    const [inputCheck, setInputCheck] = useState(false);

    return (
        <li className="bg-primary/50 p-2 rounded-xl border-white/10 shadow">
            <div className="flex gap-1 text-xs text-primary font-semibold">
                <span>{episode_id}.</span>
                <p>{name}</p>
            </div>

            <div className="flex items-center gap-1">
                <p className="text-xs text-gradient p-2">{description}</p>
                <label>
                    <input type="checkbox" checked={inputCheck} onChange={() => setInputCheck(!inputCheck)} />
                </label>
            </div>

            {inputCheck && (
                <div className="text-xs flex flex-col gap-1 mt-2">
                    <h5 className="text-primary underline">{languages[lang].sagaData.achievements}</h5>

                    {achievementTypes.map((type) => (
                        <AchievementList
                            key={type}
                            labelKey={type}
                            items={achievements?.[type]}
                            lang={lang}
                        />
                    ))}

                    {experience && (
                        <p className="text-gradient flex items-center gap-1">
                            {languages[lang].sagaData.experience}
                            <span>+{experience}</span>
                        </p>
                    )}
                </div>
            )}
        </li>
    );
};
