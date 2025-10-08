import { ToggleButton } from "@/components/ToggleButton";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { useContext } from "react";

export const AccordionSerie = ({ className, type, name, text, episodes, children }) => {
    const [isOpen, toggleBox] = useToggle();
    const { lang } = useContext(LanguagesContext);

    const Tag = type === "saga" ? "article" : "ul";

    const stylesSection = {
        saga: "gap-0 bg-gradient-card p-4 rounded-xl shadow transition-all duration-300 ease-in-out hover:-translate-y-0.5",
        arcs: "bg-secondary p-2 rounded-xl border border-white/30 shadow",
    };

    const stylesTitle = {
        saga: "text-2xl",
        arcs: "text-xl",
    };

    const stylesSubTitle = {
        saga: "",
        arcs: "text-xs",
    };

    const styleText = {
        arcs: "p-2 text-xs",
    };

    return (
        <Tag
            className={classNames(stylesSection[type], className, {
                "shadow-2xl": isOpen && type === "saga",
            })}
        >
            <header className="flex items-center justify-between cursor-pointer" onClick={toggleBox}>
                <div>
                    <div className="flex items-center gap-2">
                        <p className={`font-family-pirate text-primary  ${stylesTitle[type]}`}>{name}</p>
                        <div className={`flex items-center gap-1 pt-2 text-muted ${stylesSubTitle[type]}`}>
                            <span>{episodes}</span>
                            <p>{languages[lang].sagaData.episodes}</p>
                        </div>
                    </div>

                    <p className={`text-muted ${styleText[type]}`}>{text}</p>
                </div>
                <ToggleButton isOpen={isOpen} />
            </header>

            <div
                className={classNames("grid transition-[grid-template-rows] duration-300", {
                    "pt-4 [grid-template-rows:1fr]": isOpen,
                    "[grid-template-rows:0fr]": !isOpen,
                })}
            >
                <div className="min-h-0 overflow-hidden space-y-1">{children}</div>
            </div>
        </Tag>
    );
};
