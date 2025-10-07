import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { clearAllCards, getUnlockedCards } from "@/core/achievements/achievementsStorage";
import { BoatCard } from "@/dashboard/components/cards/BoatCard";
import { CharacterCardUser } from "@/dashboard/components/cards/CharacterCardUser";
import { FruitCard } from "@/dashboard/components/cards/FruitCard";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const Cards = () => {
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const [unlockedCards, setUnlockedCards] = useState({
        characters: [],
        items: [],
        fruits: [],
        swords: [],
        boats: [],
    });
    const [activeFilter, setActiveFilter] = useState("all"); // all, characters, boats, fruits, items, swords

    useEffect(() => {
        const cards = getUnlockedCards();
        setUnlockedCards(cards);
    }, []);

    const handleReset = () => {
        showModal({
            message: languages[lang].modal.deleteCards,
            onConfirm: () => {
                clearAllCards();
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
            ...unlockedCards.boats.map((boat) => ({ ...boat, cardType: "boat" })),
            ...unlockedCards.fruits.map((fruit) => ({ ...fruit, cardType: "fruit" })),
        ];
    };

    const getFilteredCards = () => {
        if (activeFilter === "all") return getAllCards();
        if (activeFilter === "characters")
            return unlockedCards.characters.map((character) => ({ ...character, cardType: "character" }));
        if (activeFilter === "boats")
            return unlockedCards.boats.map((boat) => ({ ...boat, cardType: "boat" }));
        if (activeFilter === "fruits")
            return unlockedCards.fruits.map((fruit) => ({ ...fruit, cardType: "fruit" }));
        return [];
    };

    const filteredCards = getFilteredCards();

    const totalCards = getAllCards().length;
    const counts = {
        characters: unlockedCards.characters.length,
        boats: unlockedCards.boats.length,
        fruits: unlockedCards.fruits.length,
    };

    const filters = [
        { key: "all", label: languages[lang].cards.all || "All", count: totalCards },
        {
            key: "characters",
            label: languages[lang].cards.characters || "Characters",
            count: counts.characters,
        },
        { key: "boats", label: languages[lang].cards.boats || "Boats", count: counts.boats },
        { key: "fruits", label: languages[lang].cards.fruits || "Fruits", count: counts.fruits },
    ];

    return (
        <div className="p-2 md:p-8">
            <div className="flex justify-between flex-wrap items-center mb-6">
                <h1 className="text-3xl font-bold text-primary">{languages[lang].cards.collection}</h1>
                <button
                    onClick={handleReset}
                    className="bg-linePrimary hover:bg-lineDark text-dark dark:text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
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
                    if (card.cardType === "boat") {
                        return <BoatCard key={`boat-${card.boat_id}`} boat={card} />;
                    }
                    if (card.cardType === "fruit") {
                        return <FruitCard key={`fruit-${card.fruit_id}`} fruit={card} />;
                    }
                    return null;
                })}
            </div>

            {filteredCards.length === 0 && (
                <div className="text-center py-20 text-white/50">
                    <p className="text-xl">{languages[lang].cards.noCards}</p>
                    <p className="text-sm mt-2">{languages[lang].cards.unlockedCards}</p>
                </div>
            )}
        </div>
    );
};
