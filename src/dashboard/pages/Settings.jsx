import { LanguagesContext } from "@/context/LanguagesContext";
import { settingsMenu } from "@/dashboard/data/settings";
import { useContext } from "react";

export const Settings = () => {
    const { lang } = useContext(LanguagesContext);

    const fields = settingsMenu(lang);

    return (
        <section className="p-2">
            <div className="grid grid-cols-1 gap-1 text-sm">
                {fields.map(({ emoji, title, text }, index) => (
                    <div
                        key={`${title}-${index}}`}
                        className="flex items-center gap-2 p-2 bg-gradient-card rounded shadow"
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
