import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { clearUserCards, getUnlockedCards } from "@/core/achievements/achievementsStorage";
import { BoatCard } from "@/dashboard/components/cards/BoatCard";
import { CharacterCardUser } from "@/dashboard/components/cards/CharacterCardUser";
import { FruitCard } from "@/dashboard/components/cards/FruitCard";
import { ItemCard } from "@/dashboard/components/cards/ItemCard";
import { SwordCard } from "@/dashboard/components/cards/SwordCard";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const Cards = () => {
    const { user } = useContext(AuthContext);
    const userId = user?.id || user?._id;
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const [unlockedCards, setUnlockedCards] = useState({
        characters: [],
        items: [],
        fruits: [],
        swords: [],
        boats: [],
    });
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const cards = getUnlockedCards(userId);
        setUnlockedCards(cards);
    }, []);

    const handleReset = () => {
        showModal({
            message: languages[lang].modal.deleteCards,
            onConfirm: () => {
                clearUserCards(userId);
                hideModal();
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            },
            onCancel: hideModal,
            confirmText: languages[lang].modal.confirmLogOut,
        });
    };

    const getAllCards = () => {
        return [
            ...unlockedCards.characters.map((character) => ({ ...character, cardType: "character" })),
            ...unlockedCards.items.map((item) => ({ ...item, cardType: "item" })),
            ...unlockedCards.fruits.map((fruit) => ({ ...fruit, cardType: "fruit" })),
            ...unlockedCards.swords.map((sword) => ({ ...sword, cardType: "sword" })),
            ...unlockedCards.boats.map((boat) => ({ ...boat, cardType: "boat" })),
        ];
    };

    const getFilteredCards = () => {
        if (activeFilter === "all") return getAllCards();
        if (activeFilter === "characters")
            return unlockedCards.characters.map((character) => ({ ...character, cardType: "character" }));
        if (activeFilter === "items")
            return unlockedCards.items.map((item) => ({ ...item, cardType: "item" }));
        if (activeFilter === "fruits")
            return unlockedCards.fruits.map((fruit) => ({ ...fruit, cardType: "fruit" }));
        if (activeFilter === "swords")
            return unlockedCards.swords.map((sword) => ({ ...sword, cardType: "sword" }));
        if (activeFilter === "boats")
            return unlockedCards.boats.map((boat) => ({ ...boat, cardType: "boat" }));
        return [];
    };

    const filteredCards = getFilteredCards();

    const totalCards = getAllCards().length;
    const counts = {
        characters: unlockedCards.characters.length,
        items: unlockedCards.items.length,
        fruits: unlockedCards.fruits.length,
        swords: unlockedCards.swords.length,
        boats: unlockedCards.boats.length,
    };

    const filters = [
        { key: "all", label: languages[lang].cards.all || "All", count: totalCards },
        {
            key: "characters",
            label: languages[lang].cards.characters || "Characters",
            count: counts.characters,
        },
        { key: "items", label: languages[lang].cards.items || "Items", count: counts.items },
        { key: "fruits", label: languages[lang].cards.fruits || "Fruits", count: counts.fruits },
        { key: "swords", label: languages[lang].cards.swords || "Swords", count: counts.swords },
        { key: "boats", label: languages[lang].cards.boats || "Boats", count: counts.boats },
    ];

    return (
        <div className="p-2 md:p-8">
            <div className="flex justify-between flex-wrap items-center mb-6">
                <h1 className="text-3xl font-bold text-primary">{languages[lang].cards.collection}</h1>
                <button
                    onClick={handleReset}
                    className="bg-linePrimary hover:bg-lineDark dark:text-black !text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                >
                    🗑️ {languages[lang].cards.deleteCards}
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((filter) => (
                    <button
                        key={filter.key}
                        onClick={() => setActiveFilter(filter.key)}
                        className={`
                            px-2 py-1 rounded-lg font-semibold transition-all duration-300 cursor-pointer
                            ${
                                activeFilter === filter.key
                                    ? "bg-accent text-primary shadow-lg scale-105"
                                    : "bg-white/10 text-primary hover:bg-white/20"
                            }
                        `}
                    >
                        {filter.label} ({filter.count})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xs mx-auto sm:max-w-container">
                {filteredCards.map((card) => {
                    if (card.cardType === "character") {
                        return <CharacterCardUser key={`char-${card.character_id}`} character={card} />;
                    }
                    if (card.cardType === "item") {
                        return <ItemCard key={`item-${card.item_id}`} item={card} />;
                    }
                    if (card.cardType === "fruit") {
                        return <FruitCard key={`fruit-${card.fruit_id}`} fruit={card} />;
                    }
                    if (card.cardType === "sword") {
                        return <SwordCard key={`sword-${card.sword_id}`} sword={card} />;
                    }
                    if (card.cardType === "boat") {
                        return <BoatCard key={`boat-${card.boat_id}`} boat={card} />;
                    }
                    return null;
                })}
            </div>

            {filteredCards.length === 0 && (
                <div className="text-center py-20 text-white/50">
                    <p className="text-xl">{languages[lang].cards.noCards}</p>
                    <p className="text-sm mt-2">{languages[lang].cards.unlockCards}</p>
                </div>
            )}
        </div>
    );
};
