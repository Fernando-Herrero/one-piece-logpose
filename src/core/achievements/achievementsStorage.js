import { local } from "@/helpers/storage";

const CARDS_KEY = "unlockedCards";

export const getUnlockedCards = () => {
    const data = local.get(CARDS_KEY);
    return (
        data || {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        }
    );
};

export const unlockCard = (type, card) => {
    const allCards = getUnlockedCards();

    const idKey = `${type.slice(0, -1)}_id`;
    const exists = allCards[type].some((c) => c[idKey] === card[idKey]);

    if (!exists) {
        allCards[type].push(card);
        local.save(CARDS_KEY, allCards);
        console.log(`✅ Carta desbloqueada: ${card.name}`);
    } else {
        console.log(`ℹ️ Carta ya desbloqueada: ${card.name}`);
    }
};

export const clearAllCards = () => {
    local.remove(CARDS_KEY);
    console.log("🗑️ Todas las cartas eliminadas");
};
