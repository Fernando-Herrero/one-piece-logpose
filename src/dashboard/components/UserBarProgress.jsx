import { episodes } from "@/dashboard/data/serieData/episodes";
import { memo } from "react";

export const UserBarProgress = memo(({ experience, className }) => {
    const totalExperience = episodes.reduce((acc, episode) => acc + episode.experience, 0);

    return (
        <div
            className={`w-full flex items-center overflow-hidden rounded-xl border border-white/30 ${className}`}
        >
            <progress
                value={experience}
                max={totalExperience}
                className="w-full h-full progress-bar"
            ></progress>
        </div>
    );
});
