import { LanguagesContext } from "@/context/LanguagesContext";
import { settingsMenu } from "@/dashboard/data/settings";
import { useDevice } from "@/hooks/useDevice";
import { useGoTo } from "@/hooks/useGoTo";
import classNames from "classnames";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const Settings = () => {
    const { isTablet } = useDevice();
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();
    const fields = settingsMenu(lang, goTo);

    return (
        <>
            <section className="p-2 md:p-8">
                <div
                    className={classNames(
                        "grid grid-cols-1 justify-items-center gap-1 w-full text-sm max-w-3xl md:text-base",
                        "md:grid-cols-2 md:gap-4",
                        {
                            "grid-cols-2": isTablet,
                        }
                    )}
                >
                    {fields.map(({ emoji, title, text, onClick }, index) => (
                        <div
                            key={`${title}-${index}}`}
                            className="flex items-center gap-2 p-2 bg-gradient-card w-full rounded shadow min-h-32 cursor-pointer md:p-4"
                            onClick={onClick}
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

            <Outlet />
        </>
    );
};
