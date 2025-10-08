import { CardImage } from "@/dashboard/components/cards/CardImageBack";

export const CharacterCardUser = ({ character }) => {
    const cardType = character.type[character.type.length - 1];

    const typeStyles = {
        common: {
            gradient: "from-slate-700 via-slate-600 to-slate-700",
            shadow: "shadow-slate-500/50",
            glow: "hover:shadow-slate-400/70",
            border: "border-slate-500",
        },
        uncommon: {
            gradient: "from-emerald-700 via-emerald-600 to-emerald-700",
            shadow: "shadow-emerald-500/50",
            glow: "hover:shadow-emerald-400/70",
            border: "border-emerald-500",
        },
        rare: {
            gradient: "from-blue-700 via-blue-600 to-blue-700",
            shadow: "shadow-blue-500/50",
            glow: "hover:shadow-blue-400/70",
            border: "border-blue-500",
        },
        legendary: {
            gradient: "from-amber-600 via-yellow-500 to-amber-600",
            shadow: "shadow-yellow-500/60",
            glow: "hover:shadow-yellow-400/80",
            border: "border-yellow-500",
        },
    };

    const style = typeStyles[cardType];

    return (
        <div
            className={`
            relative rounded-xl overflow-hidden
            bg-gradient-to-br ${style.gradient}
            border-2 ${style.border}
            shadow-xl ${style.shadow}
            transition-all duration-500 ease-out
            hover:scale-105 hover:-translate-y-2 ${style.glow}
            cursor-pointer group
        `}
        >
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative overflow-hidden">
                <CardImage
                    src={character.image}
                    alt={character.name}
                    className="w-full h-56 object-cover object-[center_0%] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-4 bg-black/30 backdrop-blur-sm">
                <h3 className="font-bold text-xl text-white mb-2 tracking-wide">{character.name}</h3>
                <div className="space-y-1 text-white/90">
                    <p className="text-sm font-medium">{character.crew}</p>
                    <p className="text-sm">{character.position}</p>
                    {character.fruit && (
                        <p className="text-xs mt-3 italic text-white/70 border-t border-white/20 pt-2">
                            {character.fruit}
                        </p>
                    )}
                </div>
            </div>

            <div
                className={`
                absolute top-3 right-3 px-3 py-1 rounded-full
                text-xs font-bold uppercase tracking-wider
                bg-black/60 backdrop-blur-sm text-white
                border ${style.border}
            `}
            >
                {cardType}
            </div>
        </div>
    );
};
