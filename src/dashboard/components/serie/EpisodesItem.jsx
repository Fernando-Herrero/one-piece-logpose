import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { saveUserInLocalStorage } from "@/core/auth/auth.service";
import { useAuth } from "@/core/auth/useAuth";
import { AchievementList } from "@/dashboard/components/serie/AchievementsList";
import { languages } from "@/helpers/languages";
import { local } from "@/helpers/storage";
import classNames from "classnames";
import { useContext, useState } from "react";

export const EpisodeItem = ({ episode_id, name, description, achievements, experience }) => {
    const { lang } = useContext(LanguagesContext);
    const achievementTypes = ["characters", "items", "fruits", "swords", "boats"];
    const checkedSaved = local.get(`episode_${episode_id}`);
    const [inputCheck, setInputCheck] = useState(checkedSaved || false);
    const { user, setUser } = useContext(AuthContext);
    const { updatedProfile } = useAuth();

    const handleInputCheck = async () => {
        const newCheckState = !inputCheck;
        setInputCheck(newCheckState);
        local.save(`episode_${episode_id}`, newCheckState);

        if (user && experience) {
            const experienceValue = Number(experience);
            const currentExperience = Number(user.experience || 0);

            const newExperince = newCheckState
                ? currentExperience + experienceValue
                : currentExperience - experienceValue;

            const updatedUserLocal = { ...user, experience: Math.max(0, newExperince) };

            setUser(updatedUserLocal);

            try {
                await updatedProfile(user, { experience: updatedUserLocal.experience });
                saveUserInLocalStorage(updatedUserLocal);
                console.log(`Experiencia ${newCheckState ? "sumada" : "restada"}: ${experience}`);
            } catch (error) {
                setUser(user);
                setInputCheck(!newCheckState);
                local.save(`episode_${episode_id}`, !newCheckState);
                console.error("Error al actualizar experiencia", error);
            }
        }
        // GetCard(itemName, level);
    };

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
                        className="cursor-pointer"
                        type="checkbox"
                        checked={inputCheck}
                        onChange={handleInputCheck}
                    />
                </label>
                <div className="opacity-0 bg-sunny text-primary rounded-xl p-2 absolute z-20 bottom-0 right-3 transition duration-300 group-hover:opacity-100 pointer-events-none">
                    <p>{languages[lang].sagaData.viewedChapter}</p>
                </div>
            </div>

            <div
                className={classNames(
                    "text-xs grid rounded-xl bg-black/30 transition-all duration-300 ease-out",
                    {
                        "[grid-template-rows:1fr] gap-1 p-2 opacity-100": inputCheck,
                        "[grid-template-rows:0fr] opacity-0": !inputCheck,
                    }
                )}
            >
                <div className="min-h-0 overflow-hidden">
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
            </div>
        </li>
    );
};
