import { CardImage } from "@/dashboard/components/cards/CardImageBack";

export const ItemCard = ({ item }) => {
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

    const style = typeStyles[item.type];

    return (
        <div
            className={`
                relative rounded-xl overflow-hidden
                bg-gradient-to-br ${style.gradient}
                border-2 ${style.border}
                shadow-xl ${style.shadow}
                transition-all duration-500 ease-out
                hover:scale-105 hover:-translate-y-2 ${style.glow}
                cursor-pointer group flex flex-col justify-between
            `}
        >
            <CardImage
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-xl text-white tracking-wide">{item.name}</h3>
                <div className="border-t border-white/20 pt-1 space-y-1 mt-auto">
                    {item.owner && (
                        <p className="text-xs text-white/70">
                            <span className="font-semibold">Owner:</span> {item.owner}
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
                {item.type}
            </div>
        </div>
    );
};
