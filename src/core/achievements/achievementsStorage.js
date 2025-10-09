import { local } from "@/helpers/storage";

const CARDS_KEY = "unlockedCards";

export const getUnlockedCards = (userId) => {
    const key = userId ? `${CARDS_KEY}_${userId}` : CARDS_KEY;
    const data = local.get(key);
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

export const unlockCard = (type, card, userId) => {
    const allCards = getUnlockedCards(userId);

    const idKey = `${type.slice(0, -1)}_id`;
    const exists = allCards[type].some((c) => c[idKey] === card[idKey]);

    if (!exists) {
        allCards[type].push(card);
        const key = userId ? `${CARDS_KEY}_${userId}` : CARDS_KEY;
        local.save(key, allCards);
        console.log(`✅ Carta desbloqueada: ${card.name} (Usuario: ${userId})`);
    } else {
        console.log(`ℹ️ Carta ya desbloqueada: ${card.name}`);
    }
};

export const clearUserCards = (userId) => {
    if (!userId) return;
    const key = `${CARDS_KEY}_${userId}`;
    local.remove(key);
    console.log(`🗑️ Cartas del usuario ${userId} eliminadas`);
};
