import { CardImage } from "@/dashboard/components/cards/CardImageBack";

export const FruitCard = ({ fruit }) => {
    const typeStyles = {
        Paramecia: {
            gradient: "from-purple-700 via-purple-600 to-purple-700",
            shadow: "shadow-purple-500/50",
            glow: "hover:shadow-purple-400/70",
            border: "border-purple-500",
        },
        Zoan: {
            gradient: "from-orange-700 via-orange-600 to-orange-700",
            shadow: "shadow-orange-500/50",
            glow: "hover:shadow-orange-400/70",
            border: "border-orange-500",
        },
        Logia: {
            gradient: "from-red-700 via-red-600 to-red-700",
            shadow: "shadow-red-500/50",
            glow: "hover:shadow-red-400/70",
            border: "border-red-500",
        },
    };

    const style = typeStyles[fruit.type];

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
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-4 bg-black/30 backdrop-blur-sm">
                <h3 className="font-bold text-xl text-white mb-1 tracking-wide">{fruit.name}</h3>
                <p className="text-sm italic text-white/80 mb-3">{fruit.roman_name}</p>
                <div className="border-t border-white/20 pt-2 space-y-1">
                    <p className="text-xs text-white/70">
                        <span className="font-semibold">Type:</span> {fruit.type}
                    </p>
                    <p className="text-xs text-white/70">
                        <span className="font-semibold">User:</span> {fruit.current_user}
                    </p>
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
                {fruit.type}
            </div>
        </div>
    );
};
