import moon from "@/assets/icons/moon-icon.svg";
import sun from "@/assets/icons/sun-icon.svg";
import { local } from "@/helpers/storage";
import classNames from "classnames";
import { useEffect, useState } from "react";
export const DarkTheme = () => {
    const savedTheme = local.get("theme");
    const [isDark, setIsDark] = useState(savedTheme ?? false);

    const onDarkTheme = () => {
        setIsDark((prev) => {
            const newDark = !prev;
            local.save("theme", newDark);
            return newDark;
        });
    };

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div className="p-2 rounded-xl group">
            <button
                className={classNames(
                    "cursor-pointer transition-transform duration-300 group-hover:scale-105",
                    {
                        flex: isDark,
                        hidden: !isDark,
                    }
                )}
                onClick={onDarkTheme}
            >
                <img className="w-4" src={sun} alt="Moon icon" />
            </button>
            <div className={`dark-theme-slider ${isDark ? "dark" : ""}`}></div>
            <button
                className={classNames(
                    "cursor-pointer transition-transform duration-300 group-hover:scale-105",
                    {
                        hidden: isDark,
                        flex: !isDark,
                    }
                )}
                onClick={onDarkTheme}
            >
                <img className="w-4" src={moon} alt="Moon icon" />
            </button>
        </div>
    );
};
