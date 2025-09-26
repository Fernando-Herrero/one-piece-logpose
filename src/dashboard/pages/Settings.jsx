import { LanguagesContext } from "@/context/LanguagesContext";
import { settingsMenu } from "@/dashboard/data/settings";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useContext } from "react";

export const Settings = () => {
    const { isTablet } = useDevice();
    const { lang } = useContext(LanguagesContext);

    const fields = settingsMenu(lang);

    return (
        <section className="p-2">
            <div
                className={classNames(
                    "grid grid-cols-1 justify-items-center gap-1 text-sm max-w-2xl",
                    "md:grid-cols-2",
                    {
                        "grid-cols-2": isTablet,
                    }
                )}
            >
                {fields.map(({ emoji, title, text }, index) => (
                    <div
                        key={`${title}-${index}}`}
                        className="flex items-center gap-2 p-2 bg-gradient-card rounded shadow max-w-80 min-h-32"
                    >
                        <span>{emoji}</span>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-primary font-semibold">{title}</h5>
                            <p className="text-gradient">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
