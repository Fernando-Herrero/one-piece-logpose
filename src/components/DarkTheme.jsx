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
        <>
            <div className="flex md:hidden">
                <button
                    className="w-9 h-9 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={onDarkTheme}
                    aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
                >
                    <img className="w-5 h-5" src={isDark ? sun : moon} alt={isDark ? "Sol" : "Luna"} />
                </button>
            </div>

            <div className="hidden md:flex items-center justify-between w-20 h-10 relative rounded-[34px] p-2 bg-card shadow">
                <div
                    className="z-0 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={onDarkTheme}
                >
                    <img className="w-5 h-5" src={sun} alt="Sol" />
                </div>

                <div
                    className={classNames(
                        "absolute w-[34px] h-[34px] top-[3px] left-[3px] rounded-full shadow z-10 transition-all duration-500 ease-in-out",
                        {
                            "translate-x-0 rotate-0 bg-gradient-to-br from-primary via-accent to-accentHover":
                                !isDark,
                            "translate-x-10 rotate-[360deg] bg-gradient-to-br from-primary via-accent to-accentHover":
                                isDark,
                        }
                    )}
                />

                <div
                    className="z-0 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={onDarkTheme}
                >
                    <img className="w-5 h-5" src={moon} alt="Luna" />
                </div>
            </div>
        </>
    );
};
