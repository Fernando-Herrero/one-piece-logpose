import arrow from "@/assets/icons/right-arrow.svg";
import { boats } from "@/dashboard/data/serieData/boats";
import { characters } from "@/dashboard/data/serieData/characters";
import { fruits } from "@/dashboard/data/serieData/fruits";
import { items } from "@/dashboard/data/serieData/items";
import { swords } from "@/dashboard/data/serieData/swords";
import { languages } from "@/helpers/languages";

export const AchievementList = ({ labelKey, items: itemIds, lang }) => {
    if (!itemIds?.length) return null;

    const dataMap = {
        characters: characters,
        items: items,
        fruits: fruits,
        swords: swords,
        boats: boats,
    };

    const idKeys = {
        characters: "character_id",
        items: "item_id",
        fruits: "fruit_id",
        swords: "sword_id",
        boats: "boat_id",
    };

    const dataSource = dataMap[labelKey];
    const idKey = idKeys[labelKey];

    return (
        <div className="flex items-center gap-1 flex-wrap">
            <p className="text-gradient">{languages[lang].sagaData[labelKey]}</p>
            <img className="w-2" src={arrow} alt="Right arrow icon" />
            {itemIds.map((itemId, index) => {
                const foundItem = dataSource?.find((element) => element[idKey] === itemId);
                const isLast = index === itemIds.length - 1;

                return (
                    <p key={`${itemId}-${index}`} className="text-gradient">
                        {foundItem?.name || itemId}
                        {!isLast && ","}
                    </p>
                );
            })}
        </div>
    );
};
