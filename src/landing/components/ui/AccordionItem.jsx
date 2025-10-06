import { ToggleButton } from "@/components/ToggleButton";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";

export const AccordionItem = ({ title, children, className = "", classHeader = "" }) => {
    const [open, toggleAccordion] = useToggle();

    return (
        <section
            className={classNames(`gap-0 bg-gradient-card p-4 rounded-xl ${className}`, {
                "shadow-2xl": open,
            })}
        >
            <header className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <p className={`text-xl font-bold ${classHeader}`}>{title}</p>
                <ToggleButton isOpen={open} />
            </header>

            <div
                className={classNames("grid transition-[grid-template-rows] duration-300", {
                    "pt-4 [grid-template-rows:1fr]": open,
                    "[grid-template-rows:0fr]": !open,
                })}
            >
                <div className="min-h-0 overflow-hidden">{children}</div>
            </div>
        </section>
    );
};
