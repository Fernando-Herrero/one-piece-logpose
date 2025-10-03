import arrow from "@/assets/icons/right-arrow.svg";
import { languages } from "@/helpers/languages";

export const AchievementList = ({ labelKey, items, lang }) => {
    if (!items?.length) return null;

    return (
        <div className="flex items-center gap-1 flex-wrap">
            <p className="text-gradient">{languages[lang].sagaData[labelKey]}</p>
            <img className="w-2" src={arrow} alt="Right arrow icon" />
            {items.map((item, index) => (
                <p key={`${item}-${index}`}>{item}</p>
            ))}
        </div>
    );
};
